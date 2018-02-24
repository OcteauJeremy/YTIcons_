
var mongoose = require('mongoose');

var TypeSchema = mongoose.Schema({
    name: String,
    css: String,
    minSubscribers: Number,
    maxSubscribers: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Type', TypeSchema);

