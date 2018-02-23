var Card = require('../models/card.model');
var Type = require('../models/type.model');

exports.create = function (req, res) {
    console.log('body', req.body);
    if (!req.body.id || !req.body.name || !req.body.image || !req.body.nationality || !req.body.nbSubscribers ||
        !req.body.nbViews || !req.body.category || !req.body.nbVideos || !req.body.url || !req.body.description ||
        !req.body.citation || !req.body.type || !req.body.price) {
        return res.status(400).send({message: "Wrong parameters"});
    }

    Type.findOne({
        name: req.body.type
    }, function (err, type) {
        if (!type) {
            return res.status(400).send({message: "Type doesn't exist."});
        }

        if (err) {
            console.log(err.message);
            return res.status(400).send({message: "Some error occurred while using mongoDB."});
        }

        var card = new Card();

        card.fromBody(req.body);

        card.save(function (err, card) {
            if (err) {
                console.log(err.message);
                return res.status(400).send({message: "Some error occurred while creating the Card."});
            } else {
                return res.status(200).send(card);
            }
        });
    });
};

exports.findAll = function (req, res) {
    var findObj = Card.find();

    populateItem().exec(function (err, cards) {
        if (err) {
            return res.status(400).send({message: "Some error occurred while retrieving users."});
        }
        return res.status(200).send(cards);
    });

};

exports.findOne = function (req, res) {
    var findObj = Card.findById(req.params.cardId);

    populateItem(findObj).populate('type').exec(function (err, card) {
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
        id: req.params.smartId
    });

    populateItem(findObj).populate('type').exec(function (err, card) {
        if (err) {
            return res.status(400).send({message: "Could not retrieve user with id " + req.params.cardId});
        } else {
            return res.status(200).send(card);
        }
    });
};

exports.getByQuery = function (req, res) {
    console.log("QUERY:", req.query);

    var pageOpt = {
        page: req.query.page ? req.query.page : 1,
        perPage: 3
    };

    var paramSearch = {
        $and: []
    };

    if (req.query.name) {
        // TODO: OR owner name
        paramSearch.$and.push({
            "name": new RegExp(req.query.name, "i")
        });
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
    if (req.query.min) {
        priceQuery.price["$gte"] = req.query.min;
    }

    if (req.query.max) {
        priceQuery.price["$lte"] = req.query.max;
    }

    if (Object.keys(priceQuery.price).length > 0) {
        paramSearch.$and.push(priceQuery);
    }


    if (req.query.nationality) {
        paramSearch.$and.push({
            "nationality": req.query.nationality
        });
    }

    if (req.query.sort) {
        // filter.sort = req.query.sort;
    }

    if (req.query.order) {
        // filter.order = req.query.order;
    }

    if (req.query.nbSubscribers) {
        paramSearch.$and.push({
            "nbSubscribers": {$gte: req.query.nbSubscribers}
        });
    }

    if (req.query.nbViews) {
        paramSearch.$and.push({
            "nbViews": {$gte: req.query.nbViews}
        });
    }

    if (req.query.nbTransactions) {
        paramSearch.$and.push({
            "nbTransactions": {$gte: req.query.nbTransactions}
        });
    }

    console.log('paramSearch', paramSearch);

    var findObj;
    if (paramSearch.$and.length > 0) {
        findObj = Card.find(paramSearch);
    } else {
        findObj = Card.find();
    }


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
            Card.count().exec(function (err, count) {
                return res.status(200).send({
                    cards: cards,
                    current: pageOpt.page,
                    pages: Math.ceil(count / pageOpt.perPage)
                });
            });
        });
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

        if (req.body.name) {
            card.name = req.body.name;
        }

        if (req.body.image) {
            card.image = req.body.image;
        }

        if (req.body.nationality) {
            card.nationality = req.body.nationality;
        }

        if (req.body.nbSubscribers) {
            card.nbSubscribers = req.body.nbSubscribers;
        }

        if (req.body.url) {
            card.url = req.body.url;
        }

        if (req.body.description) {
            card.description = req.body.description;
        }

        if (req.body.citation) {
            card.citation = req.body.citation;
        }


        var saveCard = function () {
            card.save(function (err, card) {
                if (err) {
                    console.log(err.message);
                    return res.status(400).send({message: "Some error occurred while creating the Card."});
                } else {
                    return res.status(200).send(card);
                }
            });
        };

        if (req.body.type) {
            Type.findById(req.body.type._id, function (err, type) {
                if (!type) {
                    return res.status(400).send({message: "Type doesn't exist."});
                }

                if (err) {
                    console.log(err.message);
                    return res.status(400).send({message: "Some error occurred while using mongoDB."});
                }
                card.type = type;
                saveCard();
            });
        } else {
            saveCard();
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

var populateItem = function (findObj, id) {
    findObj.populate('type').populate('transactions');
    // {
    //     path: "transactions.id",
    //     match: { card: "id"}
    // });
    return findObj;
};
