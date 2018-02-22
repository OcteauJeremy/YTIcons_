var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CardSchema = mongoose.Schema({
    id: {type: Number, unique: true},
    name: String,
    image: String,
    nationality: String,
    nbSubscribers: Number,
    nbVideos: Number,
    url: String,
    description: String,
    citation: String,
    type: {type: Schema.Types.ObjectId, ref: 'Type'}
}, {
    timestamps: true
});

module.exports = mongoose.model('Card', CardSchema);
