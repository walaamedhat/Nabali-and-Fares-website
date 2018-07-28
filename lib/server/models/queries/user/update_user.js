'use strict';

var Users = require('../../schemas/user_schema');

var updateUsers = function updateUsers(data, callback) {
  Users.findByIdAndUpdate(data.id, {
    $set: {
      role: data.role,
      username: data.name,
      password: data.password
    }
  }, { new: true }, function (error, result) {
    if (error) return callback(error);
  }).then(function (res) {
    return callback(null, res);
  }).catch(function (err) {
    return callback(err);
  });
};

module.exports = updateUsers;