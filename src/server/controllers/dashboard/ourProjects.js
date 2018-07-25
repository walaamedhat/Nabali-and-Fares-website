const createNewProject = require('../../models/queries/ourProjects/createProject');
const getAllProjects = require('../../models/queries/ourProjects/findProject');
const deleteProject = require('../../models/queries/ourProjects/deleteProject');

exports.get = (req, res) => {
    getAllProjects((err,result) => {
      if (err) {
        res.status(500).send(err);
      }
      else {
        console.log(result, ' result');
        
        res.status(200).send({data: result});
      }
    })
}
  
exports.post = (req, res) => {
    
    createNewProject(req.body, (err, dbResult) =>{
        if(err) console.error(`ERROR IN CREATE NEW PROJECT : ${err}`)
        else{
            console.log('CREATE NEW PROJECT SUCCESS')
            res.status(200).send(dbResult)            
        }
    })
}

exports.delete = (req, res) => {
    deleteProject(req.body.id,(err,result) => {
      if (err) {
        res.status(500).send(err);
      }
      else {
        console.log(result, ' res');
        
        res.status(200).send(result);
      }
    })
}