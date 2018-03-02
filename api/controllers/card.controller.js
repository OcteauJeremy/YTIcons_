var Card = require('../models/card.model');
var Type = require('../models/type.model');
var User = require('../models/user.model');
var uploadOptions = require('../configs/multer');
const download = require('image-downloader');

exports.create = function (req, res) {
    var card = new Card();

    card.fromBody(req.body);
    card.isHidden = true;

    var web3 = require('./web3.controller').web3;

    var saveCard = function (card) {
        card.save(function (err, card) {
            if (err) {
                console.log(err.message);
                return res.status(400).send({message: "Some error occurred while creating the Card."});
            }

            function checkTx(tx, card) {
                web3.eth.getTransactionReceipt(tx).then(function (resTx) {
                    if (resTx) {
                        if (req.body.isHidden == true) {
                            card.isHidden = true;
                        } else if (req.body.isHidden == false) {
                            card.isHidden = false
                        } else {
                            card.isHidden = true;
                        }

                        if (resTx.status == 0) {
                            card.delete(function (err) {
                                return res.status(400).send({message: 'Error during the ethereum transatcion.'});
                            });
                        } else {
                            card.save(function (err, result) {
                                return res.status(200).send(card);
                            });
                        }
                        //clearTimeout(lastTimeout);
                    } else {
                        setTimeout(checkTx, 1000, tx, card);
                    }
                });
            }

            if (req.body.tx) {
                setTimeout(checkTx, 1000, req.body.tx, card);
            } else {
                return res.status(200).send(card);
            }
        });
    };

    if (req.body.image != "") {
        var splitUrl = req.body.image.split('/');

        var extension = splitUrl[splitUrl.length - 1].split('.')[1];

        const options = {
            url: req.body.image,
            dest: uploadOptions.pathYoutuberUpload + '/' + card.id + '.' + extension
        };

        download.image(options).then(function (filename, image) {
            card.image = '/youtuber/' + card.id + '.' + extension;
            saveCard(card);

        }).catch(function (err) {
            throw err
        });
    } else {
        saveCard(card);
    }
};

exports.findAll = function (req, res) {
    var findObj = Card.find();

    populateItem(findObj).exec(function (err, cards) {
        if (err) {
            return res.status(400).send({message: "Some error occurred while retrieving users."});
        }
        return res.status(200).send(cards);
    });

};

exports.findOne = function (req, res) {
    var findObj = Card.findById(req.params.cardId);

    populateItem(findObj).exec(function (err, card) {
        if (err) {
            return res.status(400).send({message: "Could not retrieve user with id " + req.params.cardId});
        } else {
            return res.status(200).send(card);
        }
    });
};

exports.findBySmartId = function (req, res) {
    if (!req.params.smartId) {
        return res.status(400).send({message: "Wrong parameters."});
    }

    var findObj = Card.findOne({
        id: req.params.smartId,
        isHidden: false
    });

    populateItem(findObj).populate('type').exec(function (err, card) {
        if (err) {
            return res.status(400).send({message: "Could not retrieve user with id " + req.params.cardId});
        } else {
            return res.status(200).send(card);
        }
    });
};

var constructQuery = function (req, res, isAdmin) {
    var pageOpt = {
        page: req.query.page ? req.query.page : 1,
        perPage: 20
    };

    var paramSearch = {
        $and: []
    };

    if (!isAdmin) {
        paramSearch.$and.push({
            isHidden: isAdmin
        })
    }

    if (req.query.type) {
        paramSearch.$and.push({
            "type": req.query.type
        });
    }

    if (req.query.category) {
        paramSearch.$and.push({
            "category": req.query.category
        });
    }

    var priceQuery = {"price": {}};
    if (req.query.minPrice) {
        priceQuery.price["$gte"] = req.query.minPrice;
    }
    if (req.query.maxPrice) {
        priceQuery.price["$lte"] = req.query.maxPrice;
    }
    if (Object.keys(priceQuery.price).length > 0) {
        paramSearch.$and.push(priceQuery);
    }

    var nbSubscribersQuery = {"nbSubscribers": {}};
    if (req.query.minSubscribers) {
        nbSubscribersQuery.nbSubscribers["$gte"] = req.query.minSubscribers;
    }
    if (req.query.maxSubscribers) {
        nbSubscribersQuery.nbSubscribers["$lte"] = req.query.maxSubscribers;
    }
    if (Object.keys(nbSubscribersQuery.nbSubscribers).length > 0) {
        paramSearch.$and.push(nbSubscribersQuery);
    }

    var nbViewsQuery = {"nbViews": {}};
    if (req.query.minViews) {
        nbViewsQuery.nbViews["$gte"] = req.query.minViews;
    }
    if (req.query.maxViews) {
        nbViewsQuery.nbViews["$lte"] = req.query.maxViews;
    }
    if (Object.keys(nbViewsQuery.nbViews).length > 0) {
        paramSearch.$and.push(nbViewsQuery);
    }

    var nbVideosQuery = {"nbVideos": {}};
    if (req.query.minVideos) {
        nbVideosQuery.nbVideos["$gte"] = req.query.minVideos;
    }
    if (req.query.maxVideos) {
        nbVideosQuery.nbVideos["$lte"] = req.query.maxVideos;
    }
    if (Object.keys(nbVideosQuery.nbVideos).length > 0) {
        paramSearch.$and.push(nbVideosQuery);
    }

    var nbTransactionsQuery = {"nbTransactions": {}};
    if (req.query.minTransactions) {
        nbTransactionsQuery.nbTransactions["$gte"] = req.query.minTransactions;
    }
    if (req.query.maxTransactions) {
        nbTransactionsQuery.nbTransactions["$lte"] = req.query.maxTransactions;
    }
    if (Object.keys(nbTransactionsQuery.nbTransactions).length > 0) {
        paramSearch.$and.push(nbTransactionsQuery);
    }

    if (req.query.nationality) {
        paramSearch.$and.push({
            nationality: new RegExp(req.query.nationality, "i")
        });
    }

    if (req.query.name) {
        paramSearch.$and.push({
            "name": new RegExp(req.query.name, "i")
        });
    }

    var findObj;
    if (paramSearch.$and.length > 0) {
        findObj = Card.find(paramSearch);
    } else {
        findObj = Card.find();
    }

    var keyObj = 'price';
    if (req.query.sort) {
        keyObj = req.query.sort;
    }

    var order = 'desc';
    if (req.query.order) {
        order = req.query.order;
    }

    var tmp = {};
    tmp[keyObj] = order.toLowerCase();
    findObj.sort(tmp);

    var doingSearch = function (req, res, findObj) {
        //console.log('doingSearch', paramSearch);
        populateItem(findObj)
            .skip((pageOpt.perPage * pageOpt.page) - pageOpt.perPage)
            .limit(pageOpt.perPage)
            .exec(function (err, cards) {
                if (err) {
                    console.log(err);
                    return res.status(400).send({message: "Could not retrieve user with id "});
                }

                if (!cards) {
                    return res.status(400).send({message: "Card doesn't exist."});
                }

                var countObj;
                if (paramSearch.$and.length > 0) {
                    countObj = Card.count(paramSearch);
                } else {
                    countObj = Card.count();
                }

                populateItem(countObj).exec(function (err, count) {
                    return res.status(200).send({
                        cards: cards,
                        current: pageOpt.page,
                        pages: Math.ceil(count / pageOpt.perPage)
                    });
                });
            });
    };

    if (req.query.wallet) {
        User.findOne({wallet: new RegExp(req.query.wallet, "i")}, function (err, user) {
            if (user) {
                paramSearch.$and.push({
                    owner: user._id.toString()
                });
            }
            doingSearch(req, res, findObj);
        });
    } else {
        doingSearch(req, res, findObj);
    }
};

exports.getByQuery = function (req, res) {
    constructQuery(req, res, false);
};

exports.getByQueryAdmin = function (req, res) {
    constructQuery(req, res, true);
};

exports.update = function (req, res) {
    var findObj = Card.findById(req.params.cardId);

    populateItem(findObj).exec(function (err, card) {
        if (err) {
            return res.status(400).send({message: "Could not retrieve user with id " + req.params.cardId});
        }

        if (!card) {
            return res.status(400).send({message: "Card doesn't exist."});
        }

        for (var key in req.body) {
            if (card[key] && key != "id" || typeof card[key] == 'boolean') {
                card[key] = req.body[key];
            }
        }

        var saveCard = function () {
            card.save(function (err, card) {
                if (err) {
                    console.log(err.message);
                    return res.status(400).send({message: "Some error occurred while creating the Card."});
                }
                return res.status(200).send(card);
            });
        };


        var web3 = require('./web3.controller').web3;

        function checkTx(tx, card) {
            web3.eth.getTransactionReceipt(tx).then(function (resTx) {
                if (resTx) {
                    if (resTx.status == 0) {
                        return res.status(400).send({message: "Some error occurred while locking the Card."});
                    } else {
                       saveCard();
                    }
                    // clearTimeout(lastTimeout);
                } else {
                    setTimeout(checkTx, 1000, tx, card);
                }
            });
        }

        if (req.body.tx) {
            setTimeout(checkTx, 1000, req.body.tx, card);
        } else {
            saveCard()
        }
    });
};

exports.delete = function (req, res) {
    Card.remove({_id: req.params.cardId}, function (err, card) {
        if (err) {
            return res.status(400).send({message: "Could not delete user with id " + req.params.cardId});
        }
        return res.status(200).send({message: "Card deleted successfully!"})
    });
};


exports.getBoundsPrice = function (req, res) {
    var bounds = {
        max: 0,
        min: 0
    };

    Card.findOne().sort({price: -1}).limit(1).exec(function (err, card) {
        if (err) {
            return res.status(400).send({message: "Could not get bounds."});
        }

        bounds.max = card.price;
        Card.findOne().sort({price: 1}).limit(1).exec(function (err, card) {
            if (err) {
                return res.status(400).send({message: "Could not get bounds."});
            }

            bounds.min = card.price;
            return res.status(200).send(bounds);
        });
    });
};

exports.getCount = function (req, res) {
    Card.count().exec(function (err, nb) {
        if (err) {
            return res.status(400).send({message: "Could not get bounds."});
        }
        return res.status(200).send({count: nb});
    });
};

exports.setImage = function (req, res) {

    Card.findOne({
        id: req.params.cardId
    }, function (err, card) {
        if (err || !card) {
            return res.status(400).send({message: "Could not get card by id."});
        }
        card.image = uploadOptions.pathYoutuberUrl + '/' + req.file.filename;

        card.save(function (err, card2) {
            if (err || !card2) {
                return res.status(400).send({message: "Could not get card by id."});
            }
            return res.status(200).send(card2);
        })
    });
};

exports.findByWallet = function (req, res) {
    if (!req.params.wallet) {
        return res.status(400).send({message: "Wrong parameters."});
    }

    User.findOne({wallet: req.params.wallet}).exec(function (err, user) {
        if (err) {
            return res.status(400).send({message: "Error during the transaction."});
        }

        if (!user) {
            return res.status(400).send({message: "Wallet doesn't exist."});
        }

        var findObj = Card.find({owner: user._id, isHidden: false});

        populateItem(findObj).exec(function (err, cards) {
            if (err) {
                return res.status(400).send({message: "Error during the transaction."});
            }

            return res.status(200).send(cards);
        });

    });
};

var populateItem = function (findObj, req) {
    findObj.populate('type').populate('category').populate('nationality').populate('owner').populate({
        path: 'transactions',
        populate: [{
            path: 'from'
        }, {
            path: 'to'
        }]
    });
    return findObj;
};

