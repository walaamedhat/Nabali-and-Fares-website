'use strict';

var comments = require('../../schemas/commentSchema');

module.exports = function (comment, callback) {
  comments.create({
    commenter_name: comment.commenter_name,
    email: comment.email,
    comment: comment.comment,
    date: Date.now(),
    news_id: comment.news_id
  }).then(function (res) {
    if (callback && typeof callback === 'function') return callback(null, res);
  }).catch(function (err) {
    if (callback && typeof callback === 'function') return callback(err);
  });
};