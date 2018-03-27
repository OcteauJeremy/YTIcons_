
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

    Category.findOne({name: req.body.name.toLowerCase()}, function (err, foundCategory) {
        if (err) {
            console.log(err.message);
            return res.status(400).send({message: "Some error occurred while creating category."});
        }

        if (foundCategory) {
            return res.status(200).send(foundCategory);
        }

        var net = new Category();
        net.name = req.body.name.toLowerCase();

        net.save(function (err, category) {
            if (err) {
                console.log(err.message);
                return res.status(400).send({message: "Some error occurred while creating category."});
            }

            return res.status(200).send(category);
        });
    });
};