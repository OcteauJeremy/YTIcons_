var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CardSchema = mongoose.Schema({
    id: {type: Number, unique: true},
    name: String,
    image: String,
    nationality: String,
    nbSubscribers: Number,
    nbViews: Number,
    nbTransactions: Number, // TODO: count of collection transactions
    nbVideos: Number,
    category: String,
    url: String,
    description: String,
    citation: String,
    price: Number,
    owner: {type: Schema.Types.ObjectId, ref: "User"},
    type: {type: Schema.Types.ObjectId, ref: 'Type'}
}, {
    timestamps: true
});


CardSchema.methods.fromBody = function(body) {
    this.id = body.id;
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
    this.type = type;
}

module.exports = mongoose.model('Card', CardSchema);
