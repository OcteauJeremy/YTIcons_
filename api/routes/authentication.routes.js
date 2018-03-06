var express = require('express');
var apiRoutes = express.Router();
var app = require('../server').appServer;
var User = require('../models/user.model');
var jwt    = require('jsonwebtoken');
var request = require('request');

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
            jwt.verify(user.token, app.get('superSecret'), function(err, decoded) {
                if (err) {
                    var token = jwt.sign({userId: user._id}, app.get('superSecret'), {
                        expiresIn: 60 * 24 * 30 * 12
                    });
                    user.token = token;
                    user.save(function (err) {
                        if (err) {
                            console.log(err.message);
                            return res.status(400).send({message: "Some error occurred while using mongoDB."});
                        }
                        return res.status(200).send(user.safeObj());
                    });
                } else {
                    return res.status(200).send(user.safeObj());
                }
            });
        } else {
            return res.status(400).send({message: "Wrong password."});
        }
    };

    if (req.body.username.indexOf('@') > -1) {
        User.findOne({
            email: req.body.username
        }).select('password username email roles currency avatar wallet token').exec(connectionFunction);
    } else {
        User.findOne({
            username: req.body.username
        }).select('password username email roles currency avatar wallet token').exec(connectionFunction);
    }
});


apiRoutes.get('/token/:token', function (req, res) {
    if (!req.params.token) {
        return res.status(400).send({message: "Wrong parameters"});
    }

    jwt.verify(req.params.token, app.get('superSecret'), function(err, decoded) {
        if (err) {
            return res.status(403).send({ auth: false, message: 'Failed to authenticate token.' });
        } else {
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

apiRoutes.post('/verifyCaptcha', function (req, res) {
    if (!req.body.secret || !req.body.response) {
        return res.status(400).send({message: "Wrong parameters"});
    }

    var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + req.body.secret + "&response=" + req.body.response;

    request(verificationUrl, function(error,response,body) {
        body = JSON.parse(body);
      // Success will be true or false depending upon captcha validation.
        if (body.success !== undefined && body.success == true) {
            return res.status(200).send({success: true, message: "Success"});
        }
        return res.status(400).send({success: false, message: "Failed CAPTCHA."});
    });

});

module.exports.authRoutes = apiRoutes;
