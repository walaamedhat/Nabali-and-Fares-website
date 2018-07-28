'use strict';

var Users = require('../../schemas/user_schema');

var updateAdminData = function updateAdminData(id, data, password, callback) {
  Users.findByIdAndUpdate(id, {
    $set: {
      role: 'Admin',
      username: data.username,
      password: password
    }
  }, { new: true }, function (error, result) {
    if (error) return callback(error);
  }).then(function (res) {
    return callback(null, res);
  }).catch(function (err) {
    return callback(err);
  });
};

module.exports = updateAdminData;