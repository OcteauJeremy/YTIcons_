
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

    var net = new Nationality();
    net.code = "DE";
    net.name = "Germany";
    net.save(function (err, nation) {
        return res.status(200).send(nation);
    });
};