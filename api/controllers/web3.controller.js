var Web3 = require('web3');
const tokenAbi = require('../ressources/token/tokenContract.json');
const URL = require('../configs/urls');

var server = require('../server').serverExpress;

var User = require('../models/user.model');
var Card = require('../models/card.model');
var Transaction = require('../models/transaction.model');
var uploadOptions   = require('../configs/multer');

var io = require('socket.io').listen(server);

var web3 = module.exports.web3 = new Web3(new Web3.providers.WebsocketProvider(URL.websocket));

// web3.eth.currentProvider.on('end', function (res) {
//    console.log('--- Dropped by Infura ---');
//    web3 = module.exports.web3 = new Web3(new Web3.providers.WebsocketProvider(URL.websocket));
//    web3.eth.net.getId().then(function (id) {
//        console.log('- Blockchain ID -->', id);
//    });
// });

web3.eth.net.getId().then(function (id) {
    console.log('- Blockchain ID -->', id);
});

var tokenContract = new web3.eth.Contract(tokenAbi, URL.tokenAddress);

// Create User Root
User.findOne({
    wallet: '0x0000000000000000000000000000000000000000'
}).exec(function (err, user) {
    if (err) {
        console.log(err);
        return ;
    }

    if (!user) {
        var user = new User();
        user.username = 'YTIcons';
        user.username_lower = user.username.toLowerCase();
        user.password = user.generateHash('HBstk5AaASChsy6V');
        user.email = 'yticons@yticons.com';
        user.wallet = '0x0000000000000000000000000000000000000000';
        user.avatar = user.avatar = uploadOptions.pathAvatarUrl + '/anonymous.jpg';

        user.save(function (err, res) {
            if (err) {
                console.log(err);
                return ;
            }
            console.log('User YTIcons created')
        })
    }
});

tokenContract.events.PriceModified({
        fromBlock: 'pending'
}, function (err, event) {
    console.log('PriceModified event', event.returnValues);
    if (err) {
        console.log(err);
        return ;
    }

    var res = event.returnValues;

    populateCard(Card.findOne({id: res.tokenId})).exec(function (err, card) {
        if (err) {
            console.log(err);
            return ;
        }

        card.price = web3.utils.fromWei(res.newPrice);
        card.save(function (err, nCard) {
            if (err) {
                console.log(err);
                return ;
            }
            io.emit('tx-card', card._id);
            console.log('Price modified. ID card', card._id);
        });
    })
});

var queueEvents = {};

tokenContract.events.YTIconSold({
    fromBlock: 'pending'
}, function(err, event) {
    if (err) {
        console.log(err);
        return ;
    }
    var res = event.returnValues;

    console.log('YTIconSold event', event.returnValues);

    function launchEvent(cardId) {
        var event = queueEvents[cardId][0];

        populateCard(Card.findOne({id: event.tokenId})).exec(function (err, card) {
            if (err) {
                console.log(err);
                queueEvents[cardId].shift();
                return ;
            }

            var createTx = function (user, card, newPrice) {
                var tx = new Transaction();

                tx.from = card.owner;
                tx.price = card.price;
                tx.to = user;

                if (tx.from._id.toString() == tx.to._id.toString()) {
                    console.log('/!\\  DOUBLE EVENT /!\\');
                    queueEvents[cardId].shift();
                    console.log('queueEvents', queueEvents[cardId]);
                    return ;
                }

                var tmpCard = JSON.parse(JSON.stringify(card));
                tmpCard.transactions = [];
                tx.card = tmpCard;

                card.price = web3.utils.fromWei(newPrice);
                card.maxPrice = card.price;
                card.minPrice = tx.price;

                tx.save(function (err, nTx) {
                    if (err) {
                        console.log(err);
                        queueEvents[cardId].shift();
                        return ;
                    }
                    card.owner = user;
                    ++card.nbTransactions;
                    card.transactions.push(tx);
                    card.save(function (err, nCard) {
                        if (err) {
                            console.log(err);
                            queueEvents[cardId].shift();
                            return ;
                        }
                        nTx.populate({
                            path: 'card',
                            populate: [{
                                path: "type"
                            }, {
                                path: "transactions",
                                populate: [{
                                    path: "to"
                                }, {
                                    path: "from"
                                }]
                            }, {
                                path: "owner"
                            }, {
                                path: "nationality"
                            }]
                        }, function (err) {
                            nTx.populate("from'", function (err) {
                                nTx.populate("to", function (err) {

                                    queueEvents[cardId].shift();
                                    if (queueEvents[cardId].length > 0) {
                                        console.log('Launch event next');
                                        launchEvent(cardId);
                                    }
                                    io.emit('tx-card', nCard._id);
                                    io.emit('live-info', nTx);
                                    console.log('Transaction terminated. ID card', nCard._id);
                                })
                            });
                        });
                    })
                });
            };

            User.findOne({
                wallet: event.newOwner
            }, function (err, user) {
                if (err) {
                    console.log(err);
                    queueEvents[cardId].shift();
                    return ;
                }

                if (user) {
                    createTx(user, card, event.newPrice);
                } else {
                    var user = new User();

                    user.initValues();
                    user.wallet = event.newOwner;
                    user.save(function (err, nUser) {
                        if (err) {
                            console.log(err);
                            queueEvents[cardId].shift();
                            return ;
                        }
                        createTx(nUser, card, event.newPrice);
                    })
                }
            });
        });
    }

    if (!queueEvents[res.tokenId]) {
        console.log("Create queue for -->", res.tokenId);
        queueEvents[res.tokenId] = [];
    }

    queueEvents[res.tokenId].push(res);

    console.log('queueEvents choosing what to do', queueEvents[res.tokenId]);
    if (queueEvents[res.tokenId].length == 1) {
        console.log("Only this event, launch it");
        launchEvent(res.tokenId);
    } else {
        console.log("Event on pause");
    }



});

var populateCard = function (mongooseObj) {
    mongooseObj.populate('type').populate('category').populate('owner').populate('nationality').populate({
        path: 'transactions',
        populate: [{
            path: 'from'
        }, {
            path: 'to'
        }]
    });
    return mongooseObj;
};

// maintain connection
// const subscription = web3.eth.subscribe('newBlockHeaders', function(error, blockHeader) {
//     if (error) return console.error(error);
//     // console.log(blockHeader.transactionsRoot);
//     // console.log('Successfully subscribed!', blockHeader);
// }).on('data', function(blockHeader) {
//     // console.log(blockHeader);
//     // console.log('data nbh: ', blockHeader);
// });

io.on('connection', function(socket){
    socket.on('disconnect', function(){
    });
});