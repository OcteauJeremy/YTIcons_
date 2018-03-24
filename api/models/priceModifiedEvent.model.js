
var mongoose = require('mongoose');

var PriceModifiedSchema = mongoose.Schema({
    tokenId: Number,
    hash: {type: String, unique: true},
    newPrice: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('PriceModified', PriceModifiedSchema);

