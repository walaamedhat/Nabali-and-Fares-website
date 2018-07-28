'use strict';

var Users = require('../../schemas/user_schema');

var deleteUser = function deleteUser(id, callback) {
  Users.findByIdAndRemove(id, function (err, res) {
    if (err) return callback(err);
    return callback(null, res);
  });
};

module.exports = deleteUser;