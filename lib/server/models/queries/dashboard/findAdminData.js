'use strict';

var Users = require('../../schemas/user_schema');

var findUsers = function findUsers(id, callback) {
  Users.findOne({ _id: id }).then(function (res) {
    callback(null, res);
  }).catch(function (err) {
    return callback(err);
  });
};

module.exports = findUsers;