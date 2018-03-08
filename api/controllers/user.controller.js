var User    = require('../models/user.model');
var Card    = require('../models/card.model');
var Transaction     = require('../models/transaction.model');
var uploadOptions   = require('../configs/multer');
var app     = require('../server').appServer;
var jwt     = require('jsonwebtoken');
const fs    = require('fs');


exports.create = function (req, res) {
    if (!req.body.username || !req.body.email || !req.body.password) {
        return res.status(400).send({message: "User can not be empty"});
    }

    User.find({ $or: [ {username: req.body.username}, {email: req.body.email}]}).select('email').exec(function (err, users) {
        if (err) {
            return res.status(400).send({message: "Error during mongoDB transaction."});
        }

        var emailError = false;
        var usernameError = false;
        for (var idx = 0; idx < users.length; idx++) {
            if (users[idx].email == req.body.email) emailError = true;

            if (users[idx].username == req.body.username) usernameError = true;
        }

        if (emailError) return res.status(400).send({message: "Email already in user."});

        if (usernameError) return res.status(400).send({message: "Username already in user."});


        User.findOne({
            wallet: req.body.wallet
        }).exec(function (err, fUser) {
            var user = new User();

            user.initValues();

            if (fUser && fUser.username == '') {
                user = fUser;
            } else if (fUser && fUser.username != '' && fUser.wallet && fUser.wallet != '') {
                return res.status(400).send({message: "User with this wallet already exist."});
            } else if (req.body.wallet) {
                var web3 = require('./web3.controller').web3;
                if (web3.utils.isAddress(req.body.wallet)) {
                    user.wallet = req.body.wallet;
                } else {
                    return res.status(400).send({message: "Your wallet doesn't exist."});
                }
            }

            user.username = req.body.username;
            user.email = req.body.email;
            user.password = user.generateHash(req.body.password);

            if (!req.file) {
                var files = [];

                fs.readdirSync(__dirname + '/../ressources/avatars/default').forEach(function (file) {
                    if (file[0] != '.') {
                        files.push(file);
                    }
                });
                user.avatar = uploadOptions.pathAvatarUrl + '/' + files[Math.floor(Math.random() * files.length)];
            } else {
                user.avatar = uploadOptions.pathAvatarUrl + '/' + req.file.filename;
            }
            var token = jwt.sign({userId: user._id}, app.get('superSecret'), {
                expiresIn: 60 * 24 * 30 * 12
            });
            user.token = token;
            user.save(function (err) {
                if (err) {
                    console.log(err.message);
                    return res.status(400).send({message: "Some error occurred while creating the User."});
                } else {
                    return res.status(200).send(user);
                }
            });
        });
    });
};

exports.findAll = function (req, res) {
    User.find(function (err, users) {
        if (err) {
            return res.status(400).send({message: "Some error occurred while retrieving users."});
        }
        return res.status(200).send(users);
    });
};

exports.findOne = function (req, res) {
    User.findById(req.params.userId, function (err, user) {
        if (err) {
            return res.status(400).send({message: "Could not retrieve users with id " + req.params.userId});
        }
        return res.status(200).send(user);
    });
};

exports.findByWallet = function (req, res) {
    if (!req.params.wallet) {
        return res.status(400).send({message: "Wrong parameters."});
    }

    User.findOne({
        wallet: req.params.wallet
    }, function (err, user) {
        if (err) {
            return res.status(400).send({message: "Could not retrieve users with wallet " + req.params.wallet});
        }
        return res.status(200).send(user);
    });
};

exports.update = function (req, res) {

    if (req.currentUser.id != req.params.userId && req.currentUser.roles.indexOf('admin') == -1) {
        return res.status(403).send({ auth: false, message: 'Non authorized.' });
    }

    var modifiedUser = function (user) {
        for (var key in req.body) {
            if (user[key] && key != "password" && key != "username" && key != "token" && key != "resetPasswordToken") {
                user[key] = req.body[key];
            }
        }

        if (req.file) {
            var tmp = user.avatar.split('/');
            var fileName = tmp[tmp.length - 1];

            if (fileName.indexOf('default') < 0) {
                fs.unlink(__dirname + '/../ressources/avatars/user/' + fileName, function () {});
            }
            user.avatar = uploadOptions.pathAvatarUrl + '/' + req.file.filename;
        }

        user.save(function (err, data) {
            if (err) {
                return res.status(400).send({message: "Could not update users with id " + req.params.userId});
            } else {
                return res.status(200).send(data);
            }
        });
    };

    User.findById(req.params.userId, function (err, user) {
        if (err) {
            return res.status(400).send({message: "Could not find a user with id " + req.params.userId});
        }

        if (!user) {
            return res.status(400).send({message: "User doesn't exist."});
        }

        User.find({$or: [{username: req.body.username}, {email: req.body.email}, {wallet: req.body.wallet}]}).exec(function (err, fUser) {
            if (err) {
                return res.status(400).send({message: "Error during mongoDB transaction."});
            }

            if (fUser.length > 0 && fUser[0]._id.toString() != user._id.toString()) {
                return res.status(400).send({message: "An account already use this pseudo/wallet/email."});
            }

            if (fUser.length > 0) {
                fUser.forEach(function (userTmp) {
                   if (userTmp.username == '' && userTmp.email == '') {
                       Card.find({owner: userTmp._id}, function (err, cards) {
                            cards.forEach(function (card) {
                                card.owner = user._id;
                                card.save();
                            });
                       });

                       Transaction.find({$or: [{from: userTmp._id}, {to: userTmp._id}]}, function (err, txs) {
                            txs.forEach(function (tx) {
                               if (tx.from.toString() == userTmp._id.toString()) {
                                   tx.from = user._id;
                               }

                               if (tx.to.toString() == userTmp._id.toString()) {
                                   tx.to = user._id;
                               }

                               tx.save();
                            });
                       });
                       userTmp.remove();
                       //userTmp.delete();
                   }
                });
            }

            user.wallet = req.body.wallet;
            modifiedUser(user);
        });
    });
};

exports.delete = function (req, res) {
    User.remove({_id: req.params.userId}, function (err, user) {
        if (err) {
            return res.status(400).send({message: "Could not delete users with id " + req.params.userId});
        }
        return res.status(200).send({message: "User deleted successfully!"})
    });
};

exports.getRoot = function (req, res) {
    User.findOne({
        wallet: '0x0000000000000000000000000000000000000000'
    }).exec(function (err, user) {
        if (err) {
            console.log(err);
            return res.status(400).send({message: "Could not delete users with id " + req.params.userId});
        }
        return res.status(200).send(user);
    });
};