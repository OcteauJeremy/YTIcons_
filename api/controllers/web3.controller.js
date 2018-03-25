var Web3 = require('web3');
const tokenAbi = require('../ressources/token/tokenContract.json');
const URL = require('../configs/urls');
var smtpTransport = require('../configs/nodemailer').transporterNoReply;
var Email = require('email-templates');

var server = require('../server').serverExpress;

var User = require('../models/user.model');
var PriceModifiedEvent = require('../models/priceModifiedEvent.model');
var Card = require('../models/card.model');
var Transaction = require('../models/transaction.model');
var uploadOptions   = require('../configs/multer');

var io = module.exports.io = require('socket.io').listen(server);

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

// --- PriceModified Event ---
tokenContract.events.PriceModified({
        fromBlock: '2898958'
}, function (err, event) {
    console.log('PriceModified event', event.returnValues);
    if (err) {
        console.log(err);
        return ;
    }

    //modifyPrice(event.returnValues, event);
});

var fromBlockPriceModified = URL.blockSC;

var getPastEventsModify = function () {
    tokenContract.getPastEvents('PriceModified', {
        fromBlock: fromBlockPriceModified
    }, function (error, events) {
        console.log('getPastEventsModify', fromBlockPriceModified);
        for (var i = 0; i < events.length; i++) {
            // var eventTmp = events[i];
            // PriceModifiedEvent.find({
            //     hash: eventTmp.transactionHash
            // }, function (err, res) {
            //     if (res.length > 0) {
            //         return ;
            //     }
            //     console.log(eventTmp);
            //     modifyPrice(eventTmp.returnValues, eventTmp);
            // });
            modifyPrice(events[i].returnValues, events[i]);
        }
        if (events.length > 0) {
            fromBlockPriceModified = events[events.length - 1].blockNumber;
        }

        setTimeout(getPastEventsModify, 500);
    });
};

var modifyPrice = function (res, event) {
    populateCard(Card.findOne({id: res.tokenId})).exec(function (err, card) {
        if (err) {
            console.log(err);
            return ;
        }
        var newPriceModified = new PriceModifiedEvent();

        newPriceModified.hash = event.transactionHash;
        newPriceModified.newPrice = web3.utils.fromWei(res.newPrice);
        newPriceModified.tokenId = res.tokenId;

        newPriceModified.save(function (err, newRes) {
            if (err) {
                return ;
            }
            card.price = web3.utils.fromWei(res.newPrice);
            console.log('event modifyPrice', event);
            card.save(function (err, nCard) {
                if (err) {
                    console.log(err.message);
                    return ;
                }

                io.emit('tx-card', card._id);
                console.log('Price modified. ID card', card._id);
            });
        });
    })
};

// --- YTIconSold Event ---
tokenContract.events.YTIconSold({
    fromBlock: '2898958'
}).on('data', function(event){
    console.log('YTIconSold event', event.returnValues);

   // soldYTIcon(event.returnValues, event);
});

var fromBlockSold = URL.blockSC;
var getPastEventsSold = function () {
    tokenContract.getPastEvents('YTIconSold', {
        fromBlock: fromBlockSold
    }, function (error, events) {
        console.log('getPastEventsSold', fromBlockSold);
        for (var i = 0; i < events.length; i++) {
          soldYTIcon(events[i].returnValues, events[i]);
        }
        if (events.length > 0) {
            fromBlockSold = events[events.length - 1].blockNumber;
        }
        setTimeout(getPastEventsSold, 500);
    });
};

var queueEvents = {};
var soldYTIcon = function (res, event) {
    function launchEvent(cardId) {
        var event = queueEvents[cardId][0];
        var eventValues = event.returnValues;

        function launchNextEvent(cardId) {
           // console.log('Shifting queue of ', cardId);
            queueEvents[cardId].shift();
            if (queueEvents[cardId].length > 0) {
                // console.log('Event in the queue', queueEvents[cardId][0].returnValues);
                launchEvent(cardId);
            }
        }

        populateCard(Card.findOne({id: eventValues.tokenId})).exec(function (err, card) {
            if (err) {
                console.log(err);
                launchNextEvent(cardId);
                return ;
            }

            var createTx = function (user, card, newPrice) {
                var tx = new Transaction();

                tx.from = card.owner;
                tx.price = card.price;
                tx.to = user;
                tx.hash = event.transactionHash;

                var tmpCard = JSON.parse(JSON.stringify(card));
                tmpCard.transactions = [];
                tx.card = tmpCard;

                tx.save(function (err, nTx) {
                    if (err) {
                        // console.log(err.message);
                        launchNextEvent(cardId);
                        return ;
                    }
                    console.log('event soldYTIcon', event);

                    if (card.owner && card.owner.email != '') {
                        sendMailSold(card.owner.email, card)
                    }

                    if (user.email && user.email != '') {
                        sendMailBuy(user.email, card, web3.utils.fromWei(newPrice));
                    }

                    card.price = web3.utils.fromWei(newPrice);
                    card.maxPrice = card.price;
                    card.minPrice = tx.price;

                    card.owner = user;
                    ++card.nbTransactions;
                    card.transactions.push(tx);
                    card.save(function (err, nCard) {
                        if (err) {
                            console.log(err);
                            launchNextEvent(cardId);
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
                                    launchNextEvent(cardId);
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
                wallet: eventValues.newOwner
            }, '_id email', function (err, user) {
                if (err) {
                    console.log(err);
                    launchNextEvent(cardId);
                    return ;
                }

                if (user) {
                    createTx(user, card, eventValues.newPrice);
                } else {
                    var user = new User();

                    user.initValues();
                    user.wallet = eventValues.newOwner;
                    user.save(function (err, nUser) {
                        if (err) {
                            console.log(err);
                            launchNextEvent(cardId);
                            return ;
                        }
                        createTx(nUser, card, eventValues.newPrice);
                    })
                }
            });
        });
    }

    if (!queueEvents[res.tokenId]) {
        // console.log("Create queue for -->", res.tokenId);
        queueEvents[res.tokenId] = [];
    }

    queueEvents[res.tokenId].push(event);

    // console.log('queueEvents choosing what to do', queueEvents[res.tokenId].length);
    if (queueEvents[res.tokenId].length == 1) {
        // console.log("Only this event, launch it");
        launchEvent(res.tokenId);
    } else {
        // console.log("Event on pause");
    }
};

var populateCard = function (mongooseObj) {
    mongooseObj.populate('type').populate('category').populate('owner', '_id username username_lower wallet email').populate('nationality').populate({
        path: 'transactions',
        populate: [{
            path: 'from'
        }, {
            path: 'to'
        }]
    });
    return mongooseObj;
};

var sendMailBuy = function (email, card, newPrice) {
    console.log('sendMail Buy', email, card.name, newPrice);

    const emailSender = new Email({
        message: {
            to: email,
            from: 'no-reply@yticons.co'
            // subject: 'You new YTIcon'
        },
        // uncomment below to send emails in development/test env:
        send: true,
        transport: smtpTransport,
        views: {
            options: {
                extension: 'ejs'
            }
        }
    });

    emailSender
        .send({
            template: '../templates/buy',
            locals: {
                card: card,
                newPrice: roundEth(newPrice).toString(),
                urlServer: URL.webserver + ':' + URL.port,
                sinceDate: sinceDateTransform(new Date(card.createdAt)),
                views: abbreviateNumber(card.nbViews),
                subscribers: abbreviateNumber(card.nbSubscribers),
                videos: abbreviateNumber(card.nbVideos)
            }
        })
        .then(function(res) {
            console.log('Email successfully send to ', email);
        })
        .catch(function (err) {
            console.log('Error sending mail to ', email);
            console.log(err);
        });
};

var sendMailSold = function (email, card) {
    console.log('sendMail Sold', email, card.name);

    const emailSender = new Email({
        message: {
            to: email,
            from: 'no-reply@yticons.co'
            // subject: 'You new YTIcon'
        },
        // uncomment below to send emails in development/test env:
        send: true,
        transport: smtpTransport,
        views: {
            options: {
                extension: 'ejs'
            }
        }
    });

    emailSender
        .send({
            template: '../templates/sold',
            locals: {
                card: card,
                price: roundEth(card.price),
                urlServer: URL.webserver + ':' + URL.port,
                sinceDate: sinceDateTransform(new Date(card.createdAt)),
                views: abbreviateNumber(card.nbViews),
                subscribers: abbreviateNumber(card.nbSubscribers),
                videos: abbreviateNumber(card.nbVideos)
            }
        })
        .then(function(res) {
            console.log('Email successfully send to ', email);
        })
        .catch(function (err) {
            console.log('Error sending mail to ', email);
            console.log(err);
        });
};

var sinceDateTransform = function (date1) {
    var date2 = new Date();
    if (date1) {
        var diff = Math.abs(date1.getTime() - date2.getTime());

        var diffMonths = date2.getMonth() - date1.getMonth();
        var diffDays = date2.getDate() - date1.getDate();
        var diffWeeks = Math.floor(diffDays / 7);
        var diffYears = date2.getFullYear() - date1.getFullYear();
        var diffHours = date2.getHours() - date1.getHours();

        diffMonths += 12* diffYears;

        if (diffHours >= 0 && !diffDays && !diffWeeks && !diffMonths && !diffYears) {
            return diffHours + 'H';
        }
        if (diffWeeks > 0 && !diffMonths && !diffYears) {
            return diffWeeks + 'W';
        }
        if (diffMonths > 0 && !diffYears) {
            return diffMonths + 'M';
        }
        else if (diffYears > 0) {
            return diffYears + 'Y';
        }
        return diffDays + 'D';
    }
    return 0;
}

var roundEth = function (value) {
    var type = 'ceil';
    var exp = -4;

    if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Si value n'est pas un nombre
    // ou si l'exposant n'est pas entier
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
    }
    // Décalage
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Re "calage"
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
};

var abbreviateNumber = function (value) {
    var units = ['K', 'M', 'B', 'T'];
    function abbreviate(number, decPlaces) {
        decPlaces = Math.pow(10, decPlaces);
        var numberOrigin = number;

        for (var i = units.length - 1; i >= 0; i--) {

            var size = Math.pow(10, (i + 1) * 3);

            if (size <= number) {
                number = Math.floor(number * decPlaces / size) / decPlaces;

                if ((number === 1000) && (i < units.length - 1)) {
                    number = 1;
                    i++
                }

                var numberStr = number.toString();
                var splitNumber = numberStr.split('.');

                if (splitNumber.length > 1) {
                    if (splitNumber[0].length == 3) {
                        numberStr = splitNumber[0];
                    } else {
                        numberStr = splitNumber[0] + '.' + splitNumber[1].charAt(0);
                    }
                    number = parseFloat(numberStr);
                }
                number += units[i];
                break
            }
        }
        return number;
    }

    var isNegative = value < 0;

    var abbreviatedNumber;
    abbreviatedNumber = abbreviate(Math.abs(value), 1);

    return isNegative ? '-' + abbreviatedNumber : abbreviatedNumber;
};

io.on('connection', function(socket){
    socket.on('disconnect', function(){
    });
});


function launchEventCron() {
    var executed = false;

    if (!executed) {
        setTimeout(getPastEventsModify, 10);
        setTimeout(getPastEventsSold, 10);
        executed = true;
    }
}

launchEventCron();