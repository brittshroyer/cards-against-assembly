var mongoose = require('mongoose');

var BlogPost = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true }
});

var BlogModel = mongoose.model('blogposts', BlogPost);

module.exports = BlogModel;
