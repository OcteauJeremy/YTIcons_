
var mongoose = require('mongoose');

var NationalitySchema = mongoose.Schema({
    name: String,
    code: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Nationality', NationalitySchema);

