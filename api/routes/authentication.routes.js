var express = require('express');
var apiRoutes = express.Router();
var User = require('../models/user.model');

apiRoutes.post('/signin', function (req, res) {
    if (!req.body.username || !req.body.password) {
        res.status(400).send({message: "Wrong parameters"});
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

module.exports.authRoutes = apiRoutes;
