'use strict';

var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
  commenter_name: String,
  email: String,
  comment: String,
  date: Date,
  news_id: Object
});

module.exports = mongoose.model('comments', commentSchema);