var User = require('../models/user.model');
const fs = require('fs');
var uploadOptions   = require('../configs/multer');
var app = require('../server').appServer;
var jwt    = require('jsonwebtoken');


exports.create = function (req, res) {
    if (!req.body.username || !req.body.email || !req.body.password) {
        return res.status(400).send({message: "User can not be empty"});
    }

    User.find({ $or: [ {username: req.body.username}, {email: req.body.email}]}).exec(function (err, users) {
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
            } else if (fUser && fUser.username != '') {
                return res.status(400).send({message: "User with this wallet already exist."});
            } else if (req.body.wallet) {
                user.wallet = req.body.wallet;
            }

            user.username = req.body.username;
            user.email = req.body.email;
            user.password = user.generateHash(req.body.password);

            if (!req.file) {
                var files = [];

                console.log(__dirname + '/../ressources/avatars/default');
                fs.readdirSync(__dirname + '/../ressources/avatars/default').forEach(function (file) {
                    if (file[0] != '.') {
                        files.push(file);
                    }
                });
                user.avatar = uploadOptions.pathAvatarUrl + '/' + files[Math.floor(Math.random() * files.length)];
            } else {
                user.avatar = uploadOptions.pathAvatarUrl + '/' + req.file.filename;
            }

            user.save(function (err, user) {
                if (err) {
                    console.log(err.message);
                    return res.status(400).send({message: "Some error occurred while creating the User."});
                } else {
                    var token = jwt.sign({userId: user._id}, app.get('superSecret'), {
                        expiresIn: 60 * 24 * 30
                    });
                    user.token = token;
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

    var modifiedUser = function (user) {
        for (var key in req.body) {
            if (user[key] && key != "password") {
                user[key] = req.body[key];
            }
        }

        if (req.file) {
            var tmp = user.avatar.split('/');
            var fileName = tmp[tmp.length - 1];

            if (fileName.indexOf('default') < 0) {
                console.log('unlink');
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

        if (req.body.wallet != user.wallet) {
            User.findOne({wallet: req.body.wallet}).exec(function (err, fUser) {
                if (err) {
                    return res.status(400).send({message: "Error during mongoDB transaction."});
                }

                if (fUser) {
                    return res.status(400).send({message: "An account already use this wallet."});
                }
                modifiedUser(user);
            });
        } else {
            modifiedUser(user);
        }
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