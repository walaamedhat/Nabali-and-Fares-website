'use strict';

var findAllNews = require('../models/queries/mediaCenter/findNews');

exports.get = function (req, res) {
  findAllNews(function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send({ data: result });
    }
  });
};