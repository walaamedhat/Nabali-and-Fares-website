'use strict';

var mediaCenter = require('../../schemas/mediaCenterSchema');

module.exports = function (id, callback) {
  mediaCenter.find({ _id: id }).then(function (res) {
    return callback(null, res);
  }).catch(function (err) {
    return callback(err);
  });
};