
var User = require('../models/user.model');
var Card = require('../models/card.model');

exports.findBySubscriber = function (req, res) {

    console.log('findBySubscribers');
    const cursor = User.find().cursor();
    var ldboard = {};
    var refUser = {};


    function next(promise) {
        promise.then(function(doc) {
            if (doc) {

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
                var sortedLeaderboard = Object.keys(ldboard).sort(function(a, b) {return ldboard[b].nbSubscribers - ldboard[a].nbSubscribers});
                var returnLd = [];
                for (var i = 0; i < sortedLeaderboard.length && i < 50; i++) {
                    returnLd.push({
                        user: refUser[sortedLeaderboard[i]],
                        score: ldboard[sortedLeaderboard[i]]
                    });
                }
                res.status(200).send(returnLd);
            }
        })
    }

    next(cursor.next());



    /*cursor.on('data', function(doc) {
        // Called once for every document
        console.log(doc);
    });
    cursor.on('close', function() {
        // Called when done
        console.log('-- done');
    });*/
    // var next = function (promise) {
    //     console.log('next', promise);
    //     promise.then(function(doc) {
    //         console.log('doc', doc);
    //         if (doc) {
    //             console.log(doc);
    //             next(cursor.next());
    //         }
    //     })
    // }
    //
    // next(cursor.next);
    // console.log('findBySubscribers');
};