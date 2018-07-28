'use strict';

var getAllNews = require('../../models/queries/mediaCenter/findNews');
var addNews = require('../../models/queries/mediaCenter/createNews');
var editNews = require('../../models/queries/mediaCenter/updateNews');
var deleteNews = require('../../models/queries/mediaCenter/deleteNews');
var uploadfiles = require('../../helpers/awsHelper');

exports.get = function (req, res) {
  getAllNews(function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send({ data: result });
    }
  });
};

exports.post = function (req, res) {
  addNews(req.body, function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

exports.edit = function (req, res) {
  editNews(req.body, function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

exports.delete = function (req, res) {
  console.log(req.body.id, 'req.body.id');
  deleteNews(req.body.id, function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};