
var User = require('../models/user.model');
var Card = require('../models/card.model');


var createLeaderboard = function (req, res, wallet) {
    const cursor = User.find().cursor();
    var ldboard = {};
    var refUser = {};
    var idWalletUser = null;

    function next(promise) {
        promise.then(function(doc) {
            if (doc) {
                if (doc.username != "Root") {
                    if (wallet && doc.wallet == wallet) {
                        idWalletUser = doc._id;
                        console.log(doc._id);
                    }

                    ldboard[doc._id] = {
                        nbSubscribers: 0,
                        nbViews: 0,
                        nbCards: 0
                    };
                    refUser[doc._id] = doc;
                    Card.find({owner: doc._id}).exec(function (err, cards) {
                        if (err) {
                            return res.status(400).send({message: "Error during the transaction."});
                        }

                        for (var i = 0; i < cards.length; i++) {
                            var card = cards[i];
                            ldboard[card.owner].nbSubscribers += card.nbSubscribers;
                            ldboard[card.owner].nbViews += card.nbViews;
                        }

                        ldboard[doc._id].nbCards = cards.length;

                        if (cursor.next) {
                            next(cursor.next());
                        }
                    });
                } else {
                    if (cursor.next) {
                        next(cursor.next());
                    }
                }
            } else {
                var sortedLeaderboard = Object.keys(ldboard).sort(function(a, b) {return ldboard[b].nbSubscribers - ldboard[a].nbSubscribers});
                var order = -1;

                if (idWalletUser) {
                    order = sortedLeaderboard.indexOf(idWalletUser.toString());
                }
                var returnLd = [];
                for (var i = 0; i < sortedLeaderboard.length && i < 50; i++) {
                    returnLd.push({
                        user: refUser[sortedLeaderboard[i]],
                        score: ldboard[sortedLeaderboard[i]]
                    });
                }
                var returnedObj = {
                    leaderboard: returnLd,
                    ranking: null
                };

                if (order > -1) {
                    returnedObj.ranking = {
                        user: refUser[idWalletUser],
                        score: ldboard[idWalletUser],
                        rank: order + 1
                    }
                }

                res.status(200).send(returnedObj);
            }
        })
    }

    next(cursor.next());
};

exports.findBySubscriber = function (req, res) {
    createLeaderboard(req, res, null);
};

exports.findBySubscriberAndWallet = function (req, res) {
    createLeaderboard(req, res, req.params.wallet);
};