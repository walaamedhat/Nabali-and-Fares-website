'use strict';

var ourProjects = require('../../schemas/ourProjectsSchema');

module.exports = function (id, callback) {
  ourProjects.find({ _id: id }).then(function (res) {
    return callback(null, res);
  }).catch(function (err) {
    return callback(err);
  });
};