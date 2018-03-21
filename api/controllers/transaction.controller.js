var Transaction = require('../models/transaction.model');

exports.create = function (req, res) {
    var tx = new Transaction();

    tx.fromBody(req.body);

    var saveObj = tx.save();

    tx.save(function (err, txRes) {
        if (err) {
            return res.status(400).send({message: "Some error occurred while retrieving transactions-module."});
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
                            return res.status(400).send({message: "Some error occurred while retrieving transactions-module."});
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
            return res.status(400).send({message: "Some error occurred while retrieving transactions-module."});
        }
        return res.status(200).send(txs);
    });
};

exports.getLastTransactions = function (req, res) {
    var findObj = Transaction.find();

    findObj.sort({createdAt: 'desc'});

    var limitNb = req.query.limit ? req.query.limit : 20;

    populateItem(findObj).limit(limitNb).exec(function (err, txs) {
        if (err) {
            return res.status(400).send({message: "Some error occurred while retrieving transactions-module."});
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

exports.listenTx = function (req, res) {
    var web3 = require('./web3.controller').web3;
    var io = require('./web3.controller').io;

    function checkTx(txHash, card) {
        // console.log(txHash);
        web3.eth.getTransactionReceipt(txHash).then(function (resTx) {
            if (resTx) {
                if (resTx.status == 0) {
                    io.emit(txHash, false);
                } else {
                    io.emit(txHash, true);
                }
            } else {
                setTimeout(checkTx, 2000, txHash);
            }
        });
    }
    setTimeout(checkTx, 1000, req.params.txHash);
    return res.status(200).send({message: 'Transaction listened.'});
};

var populateItem = function (findObj) {
    findObj.populate("from").populate("to").populate({
        path: "card",
        populate: [{
            path: "type"
        }, {
            path: "transactions",
            options: {
                sort: {'createdAt': 'desc'}
            },
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
    });
    return findObj;
};