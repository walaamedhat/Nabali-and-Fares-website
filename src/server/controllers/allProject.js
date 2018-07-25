const findAllProject = require('../models/queries/ourProjects/findAllProject');
const findStarProjects = require('../models/queries/ourProjects/findStarProject');


exports.get = (req,res) => {
  findAllProject((err,result) => {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.status(200).send({data: result});
    }
  })
}


exports.starProjects = (req,res) => {
  findStarProjects((err,result) => {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.status(200).send({data: result});
    }
  })
}
