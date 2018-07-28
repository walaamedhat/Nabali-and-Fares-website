'use strict';

var findAllProject = require('../models/queries/ourProjects/findAllProject');
var findStarProjects = require('../models/queries/ourProjects/findStarProject');

exports.get = function (req, res) {
  findAllProject(function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send({ data: result });
    }
  });
};

exports.starProjects = function (req, res) {
  findStarProjects(function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send({ data: result });
    }
  });
};