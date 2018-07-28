'use strict';

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  role: String,
  username: String,
  password: String
});

var Users = mongoose.model('Users', userSchema);

module.exports = Users;