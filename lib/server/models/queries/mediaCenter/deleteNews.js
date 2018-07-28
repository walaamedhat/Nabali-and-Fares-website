'use strict';

var mediaCenter = require('../../schemas/mediaCenterSchema');

module.exports = function (id, callback) {
  mediaCenter.findByIdAndRemove(id, function (err, res) {
    if (err) return callback(err);
    return callback(null, res);
  });
};