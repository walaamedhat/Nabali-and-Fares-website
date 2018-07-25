const findProject = require('../models/queries/ourProjects/findProjectData');


exports.get = (req,res) => {
  findProject(req.params.project_id,(err,result) => {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.status(200).send({data: result});
    }
  })
}
