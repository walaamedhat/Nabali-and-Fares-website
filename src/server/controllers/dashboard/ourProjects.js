const editProject = require('../../models/queries/ourProjects/updateProject');
const createProject = require('../../models/queries/ourProjects/createProject');
const deleteProject = require('../../models/queries/ourProjects/deleteProject');


exports.edit = (req, res) => {
  console.log(req.body,'request body ');
  editProject(req.body,(err,result) => {
    if (err) {
      console.log(err,'err in update controllers');
      res.status(500).send(err);
    } else {
      console.log(result,'result updateProject controllers');
      res.status(200).send(result);
    }
  })
}




exports.post = (req , res) => {
  createProject(req.body,(err,result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }

  })
}

exports.delete = (req , res) => {
  deleteProject(req.body.id,(err,result) => {
    if (err) {
      console.log(err,'err in delete');
      res.status(500).send(err);
    }
    else {
      res.status(200).send(result);
    }

  })
}
