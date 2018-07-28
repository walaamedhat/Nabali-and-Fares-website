'use strict';

var Users = require('../../schemas/user_schema');

var findUsers = function findUsers(data, callback) {
  Users.findOne({ username: data.username }).then(function (res) {
    return callback(null, res);
  }).catch(function (err) {
    return callback(err);
  });
};

module.exports = findUsers;