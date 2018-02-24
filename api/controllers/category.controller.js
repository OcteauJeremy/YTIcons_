
var Category = require('../models/category.model');

exports.findAll = function (req, res) {
    Category.find(function (err, categories) {
        if (err) {
            return res.status(400).send({message: "Some error occurred while retrieving categories."});
        }
        return res.status(200).send(categories);
    });
};

exports.create = function (req, res) {

    var net = new Category();
    net.name = req.body.name;

    net.save(function (err, category) {
        return res.status(200).send(category);
    });
};