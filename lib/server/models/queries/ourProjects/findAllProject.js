'use strict';

var ourProjects = require('../../schemas/ourProjectsSchema');

module.exports = function (callback) {
  ourProjects.find().then(function (res) {
    return callback(null, res);
  }).catch(function (err) {
    return callback(err);
  });
};