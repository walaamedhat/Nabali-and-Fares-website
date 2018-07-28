'use strict';

var findProject = require('../models/queries/ourProjects/findProjectData');

exports.get = function (req, res) {
  findProject(req.params.project_id, function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send({ data: result });
    }
  });
};