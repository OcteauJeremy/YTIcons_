
var mongoose = require('mongoose');

var TypeSchema = mongoose.Schema({
  name: String,
  css: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Type', TypeSchema);

