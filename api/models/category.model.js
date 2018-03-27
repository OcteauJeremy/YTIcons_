
var mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
    name: {type: String, unique: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', CategorySchema);

