var express = require('express');
var apiRoutes = express.Router();
var app = require('../server').appServer;
var User = require('../models/user.model');
var jwt    = require('jsonwebtoken');

apiRoutes.post('/signin', function (req, res) {
    if (!req.body.username || !req.body.password) {
        return res.status(400).send({message: "Wrong parameters"});
    }

    var connectionFunction = function (err, user) {

        if (!user) {
            return res.status(400).send({message: "User doesn't exist."});
        }

        if (err) {
            console.log(err.message);
            return res.status(400).send({message: "Some error occurred while using mongoDB."});
        }

        //TODO: GENERATE TOKEN
        if (user.validPassword(req.body.password)) {
            var token = jwt.sign({userId: user._id}, app.get('superSecret'), {
                expiresIn: 60 * 24 * 30
            });
            user.token = token;
            return res.status(200).send(user);
        }
        return res.status(400).send({message: "Wrong password."});
    };

    if (req.body.username.indexOf('@') > -1) {
        User.findOne({
            email: req.body.username
        }, connectionFunction);
    } else {
        User.findOne({
            username: req.body.username
        }, connectionFunction);
    }
});


apiRoutes.get('/token/:token', function (req, res) {
    if (!req.params.token) {
        return res.status(400).send({message: "Wrong parameters"});
    }

    jwt.verify(req.params.token, app.get('superSecret'), function(err, decoded) {
        if (err) {
            return res.status(400).send({message: 'Failed to authenticate token.' });
        } else {
            // if everything is good, save to request for use in other routes
            User.findById(decoded.userId).exec(function (err, user) {
                if (!user) {
                    return res.status(400).send({message: "User doesn't exist."});
                }

                if (err) {
                    console.log(err.message);
                    return res.status(400).send({message: "Some error occurred while using mongoDB."});
                }

                return res.status(200).send(user);
            });
        }
    });

});




module.exports.authRoutes = apiRoutes;
