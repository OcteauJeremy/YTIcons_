var Transaction = require('../models/transaction.model');

exports.create = function (req, res) {
    var tx = new Transaction();

    tx.fromBody(req.body);

    var saveObj = tx.save();

    tx.save(function (err, txRes) {
        if (err) {
            return res.status(400).send({message: "Some error occurred while retrieving transactions."});
        }

        txRes.populate("from", function (err) {
            txRes.populate("to", function (err) {
                txRes.populate({
                    path: "card",
                    populate: [{
                        path: "type"
                    }, {
                        path: "transactions"
                    }]
                }, function (err) {
                    var txResClone = JSON.parse(JSON.stringify(txRes));

                    txResClone.card = null;

                    txRes.card.transactions.push(txResClone);

                    txRes.save(function (err, txFinal) {
                        if (err) {
                            return res.status(400).send({message: "Some error occurred while retrieving transactions."});
                        }
                        txFinal.populate("transactions", function (err) {
                            txFinal.card.nbTransactions = txFinal.card.transactions.length;
                            txFinal.card.save(function (err, toto) {

                                return res.status(200).send(txFinal);
                            });

                        });
                    })
                })
            });
        });

    });
};

exports.findAll = function (req, res) {
    var findObj = Transaction.find();

    populateItem(findObj).exec(function (err, txs) {
        if (err) {
            return res.status(400).send({message: "Some error occurred while retrieving transactions."});
        }
        return res.status(200).send(txs);
    });
};

exports.findOne = function (req, res) {
    var findObj = Transaction.findById(req.params.transactionId);

    populateItem(findObj).exec(function (err, tx) {
        if (err) {
            return res.status(400).send({message: "Could not retrieve user with id " + req.params.transactionId});
        }
        return res.status(200).send(tx);
    });
};

var populateItem = function (findObj) {
    findObj.populate("from").populate("to").populate({
        path: "card",
        populate: {
            path: "type"
        }
    });
    return findObj;
};