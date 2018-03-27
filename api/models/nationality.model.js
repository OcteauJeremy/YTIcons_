
var mongoose = require('mongoose');

var NationalitySchema = mongoose.Schema({
    name: {type: String, uniqwue: true},
    code: {type: String, uniqwue: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('Nationality', NationalitySchema);

