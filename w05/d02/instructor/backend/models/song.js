var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  spotifySongId: { type: String, required: true },
  album: String,
  year: Date,
  created: Date
});

var model = mongoose.model('Song', schema);

// Make this available to our other files
module.exports = model;
