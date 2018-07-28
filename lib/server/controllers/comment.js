'use strict';

var addComment = require('../models/queries/comments/addComment');
var getComment = require('../models/queries/comments/getComment');

exports.post = function (req, res) {
  addComment(req.body, function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

exports.get = function (req, res) {
  getComment(req.body.id, function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};