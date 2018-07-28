'use strict';

var comments = require('../../schemas/commentSchema');

module.exports = function (id, callback) {
  comments.find({ news_id: id }).then(function (res) {
    return callback(null, res);
  }).catch(function (err) {
    return callback(err);
  });
};