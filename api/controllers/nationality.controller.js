
var Nationality = require('../models/nationality.model');

exports.findAll = function (req, res) {
    Nationality.find(function (err, nationalities) {
        if (err) {
            return res.status(400).send({message: "Some error occurred while retrieving nationalities."});
        }
        return res.status(200).send(nationalities);
    });
};

exports.create = function (req, res) {

    Nationality.findOne({code: req.body.code.toUpperCase(), name: req.body.name.toLowerCase()}, function (err, foundNat) {
        if (err) {
            console.log(err.message);
            return res.status(400).send({message: "Some error occurred while creating nationality."});
        }

        if (foundNat) {
            return res.status(200).send(foundNat);
        }
        var net = new Nationality();
        net.code = req.body.code.toUpperCase();
        net.name = req.body.name.toLowerCase();

        net.save(function (err, nation) {
            if (err) {
                console.log(err.message);
                return res.status(400).send({message: "Some error occurred while creating nationality."});
            }

            return res.status(200).send(nation);
        });
    });
};