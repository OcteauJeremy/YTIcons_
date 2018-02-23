var User = require('../models/user.model');
const fs = require('fs');
var uploadOptions   = require('../configs/multer');


exports.create = function (req, res) {
    if (!req.body.username || !req.body.email || !req.body.password || !req.body.wallet) {
        return res.status(400).send({message: "User can not be empty"});
    }

    var user = new User();

    user.username = req.body.username;
    user.email = req.body.email;
    user.wallet = req.body.wallet;
    user.password = user.generateHash(req.body.password);

    if (!req.file) {
        var files = [];

        console.log(__dirname + '/../ressources/avatars/default');
        fs.readdirSync(__dirname + '/../ressources/avatars/default').forEach(function (file) {
            files.push(file);
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
            return res.status(200).send(user);
        }
    });
};

exports.findAll = function (req, res) {
    User.find(function (err, users) {
        if (err) {
            return res.status(400).send({message: "Some error occurred while retrieving users."});
        } else {
            return res.status(200).send(users);
        }
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

    User.findById(req.params.userId, function (err, user) {
        if (err) {
            return res.status(400).send({message: "Could not find a user with id " + req.params.userId});
        }

        if (!user) {
            return res.status(400).send({message: "User doesn't exist."});
        }

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
    });
};

exports.delete = function (req, res) {
    User.remove({_id: req.params.userId}, function (err, user) {
        if (err) {
            res.status(400).send({message: "Could not delete users with id " + req.params.userId});
        } else {
            res.status(200).send({message: "User deleted successfully!"})
        }
    });
};
