
var mongoose = require('mongoose');

var CardSchema = moongoose.Schema({
  id: {type: Number, unique: true },
  name: String,
  image: String,
  nationality: String,
  nbSubscriber: Number,
  url: String,
  description: String,
  citation: String,
  type: { type: Schema.Types.ObjectId, ref: 'Type'}
}, {
  timestamps: true
});
