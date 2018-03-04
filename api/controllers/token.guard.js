var jwt = require('jsonwebtoken');
var app = require('../server').appServer;
var User = require('../models/user.model');

function verifyToken(req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) {
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    }

    jwt.verify(token, app.get('superSecret'), function(err, decoded) {
        if (err)
            return res.status(401).send({ auth: false, message: 'Failed to authenticate token.' });

        User.findById(decoded.userId, function (err, user) {
            if (err) {
                return res.status(400).send({message: "Error during mongoDB transaction."});
            }
            req.currentUser = user;
            next();
        });
    });
}

function isAdmin(req, res, next) {
    if (req.currentUser.roles.indexOf('admin') == -1) {
        return res.status(403).send({ auth: false, message: 'Non authorized.' });
    }
    next();
}

module.exports.verifyToken = verifyToken;
module.exports.isAdmin = isAdmin;
