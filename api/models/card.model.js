var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var CardSchema = mongoose.Schema({
    id: Number,
    name: String,
    image: String,
    nationality: {type: Schema.Types.ObjectId, ref: "Nationality"},
    nbSubscribers: Number,
    nbViews: Number,
    nbTransactions: Number,
    transactions: [{type: Schema.Types.ObjectId, ref: "Transaction"}],
    nbVideos: Number,
    category: {type: Schema.Types.ObjectId, ref: "Category"},
    url: String,
    description: String,
    citation: String,
    price: Number,
    maxPrice: Number,
    beneficiaryWallet: String,
    minPrice: Number,
    isLocked: Boolean,
    isHidden: Boolean,
    isVerified: Boolean,
    owner: {type: Schema.Types.ObjectId, ref: "User"},
    type: {type: Schema.Types.ObjectId, ref: 'Type'}
}, {
    timestamps: true
});


CardSchema.methods.fromBody = function(body) {
    this.id = body.id;
    this.isVerified = false;
    this.name = body.name;
    this.image = body.image;
    this.nationality = body.nationality;
    this.nbSubscribers = body.nbSubscribers;
    this.nbViews = body.nbViews;
    this.nbVideos = body.nbVideos;
    this.category = body.category;
    this.url = body.url;
    this.description = body.description;
    this.citation = body.citation;
    this.price = body.price;
    this.maxPrice = this.price;
    this.type = body.type;
    this.nbTransactions = 0;
    this.owner = body.owner;
    this.isHidden = body.isHidden;
    this.isLocked = body.isLocked;
    this.beneficiaryWallet = body.beneficiaryWallet;
    if (body.transactions) {
        this.transactions = body.transactions;
    } else {
        this.transactions = [];
    }
};

CardSchema.plugin(autoIncrement.plugin, { model: 'Card', field: 'id' });

module.exports = mongoose.model('Card', CardSchema);
