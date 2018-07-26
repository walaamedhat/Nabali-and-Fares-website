const editProject = require('../../models/queries/ourProjects/updateProject');


exports.edit = (req, res) => {
  console.log(req.body,'request body ');
  editProject(req.body,(err,result) => {
    if (err) {
      console.log(err,'err in update');
      res.status(500).send(err);
    }
    else {
      res.status(200).send(result);
    }
  })
}
