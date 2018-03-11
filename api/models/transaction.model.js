
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = mongoose.Schema({
    from: {type: Schema.Types.ObjectId, ref: "User"},
    to: {type: Schema.Types.ObjectId, ref: "User"},
    price: Number,
    card: {type: Schema.Types.ObjectId, ref: "Card"},
    hash: {type: String, unique: true}
}, {
    timestamps: true
});

TransactionSchema.methods.fromBody = function (body) {
    this.from = body.from;
    this.to = body.to;
    this.price = body.price;
    this.card = body.card;
    this.txHash = body.txHash;
};

module.exports = mongoose.model('Transaction', TransactionSchema);

