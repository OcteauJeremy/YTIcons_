var Web3 = require('web3');
const tokenAbi = require('../ressources/token/tokenContract.json');
const tokenAddress = '0x6ee43a4ab5c077c19b32bf2fcd83e235d40fce8f';

var server = require('../server').serverExpress;

var User = require('../models/user.model');
var Card = require('../models/card.model');
var Transaction = require('../models/transaction.model');
var uploadOptions   = require('../configs/multer');

var io = require('socket.io').listen(server);

var web3 = module.exports.web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8546'));

web3.eth.net.getId().then(function (id) {
    console.log('ID network chain', id);
});

var tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);

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
        user.username = 'Root';
        user.password = user.generateHash('HBstk5AaASChsy6V');
        user.email = 'root@yticons.com';
        user.wallet = '0x0000000000000000000000000000000000000000';
        user.avatar = user.avatar = uploadOptions.pathAvatarUrl + '/anonymous.png';

        user.save(function (err, res) {
            if (err) {
                console.log(err);
                return ;
            }
            console.log('User Root created')
        })
    }
});

tokenContract.events.PriceModified({
        fromBlock: 'latest'
}, function (err, event) {
    console.log('PriceModified event');
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

tokenContract.events.YTIconSold({
    fromBlock: 'latest'
}, function(err, event) {
    console.log('YTIconSold event');
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

        var createTx = function (user, card, newPrice) {
            var tx = new Transaction();

            tx.from = card.owner;
            tx.price = card.price;
            tx.to = user;

            var tmpCard = JSON.parse(JSON.stringify(card));
            tmpCard.transactions = [];
            tx.card = tmpCard;

            card.price = web3.utils.fromWei(newPrice);

            tx.save(function (err, nTx) {
                 if (err) {
                     console.log(err);
                     return ;
                }
                card.owner = user;
                ++card.nbTransactions;
                card.transactions.push(tx);
                card.save(function (err, nCard) {
                    if (err) {
                        console.log(err);
                        return ;
                    }
                    nTx.populate('card', function (res) {
                        if (err) {
                            console.log(err);
                            return ;
                        }
                        io.emit('tx-card', nCard._id);
                        io.emit('live-info', nTx);
                        console.log('Transaction terminated. ID card', nCard._id);
                    });
                })
            });
        };

        User.findOne({
            wallet: res.newOwner
        }, function (err, user) {
            if (err) {
                console.log(err);
                return ;
            }

            if (user) {
                createTx(user, card, res.newPrice);
            } else {
                var user = new User();

                user.initValues();
                user.wallet = res.newOwner;
                user.save(function (err, nUser) {
                    if (err) {
                        console.log(err);
                    }
                    createTx(nUser, card, res.newPrice);
                })
            }
        });
    });
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



io.on('connection', function(socket){
    socket.on('disconnect', function(){
    });
});


