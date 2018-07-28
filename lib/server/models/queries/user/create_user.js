'use strict';

var Users = require('../../schemas/user_schema');

var createUser = function createUser(data, callback) {
  Users.create({
    role: data.role,
    username: data.name,
    password: data.password
  }).then(function (res) {
    if (callback && typeof callback === 'function') return callback(null, res);
  }).catch(function (err) {
    if (callback && typeof callback === 'function') return callback(err);
  });
};

module.exports = createUser;