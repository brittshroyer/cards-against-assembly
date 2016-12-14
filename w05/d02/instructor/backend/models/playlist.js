var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  created: Date
});

var model = mongoose.model('Playlist', schema);

// Make this available to our other files
module.exports = model;
