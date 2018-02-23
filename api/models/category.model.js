
var mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
    name: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', CategorySchema);

