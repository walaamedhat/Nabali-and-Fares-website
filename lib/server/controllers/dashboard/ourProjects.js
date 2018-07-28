'use strict';

var editProject = require('../../models/queries/ourProjects/updateProject');

exports.edit = function (req, res) {
  console.log(req.body, 'request body ');
  editProject(req.body, function (err, result) {
    if (err) {
      console.log(err, 'err in update');
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};