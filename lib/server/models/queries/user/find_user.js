'use strict';

var Users = require('../../schemas/user_schema');

var findUsers = function findUsers(callback) {
  Users.findOne({ role: 'Admin' }).then(function (res) {
    return callback(null, res);
  }).catch(function (err) {
    return callback(err);
  });
};

module.exports = findUsers;