var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: String,
  age: Number
});

var Dog = mongoose.model('Dog', schema);

// Make this available to our other files
module.exports = Dog;
