'use strict';

var ourProjects = require('../../schemas/ourProjectsSchema');

module.exports = function (id, callback) {
  ourProjects.findByIdAndRemove(id, function (err, res) {
    if (err) return callback(err);
    return callback(null, res);
  });
};