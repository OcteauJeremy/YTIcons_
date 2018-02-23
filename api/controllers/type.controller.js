var Type = require('../models/type.model');

exports.findAll = function (req, res) {
    Type.find(function (err, types) {
        if (err) {
            return res.status(400).send({message: "Some error occurred while retrieving types."});
        } else {
            return res.status(200).send(types);
        }
    });
};