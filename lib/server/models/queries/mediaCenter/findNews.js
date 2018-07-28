'use strict';

var mediaCenter = require('../../schemas/mediaCenterSchema');

module.exports = function (callback) {
  mediaCenter.find().then(function (res) {
    return callback(null, res);
  }).catch(function (err) {
    return callback(err);
  });
};