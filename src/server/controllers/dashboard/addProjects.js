const createNewProject = require('../../models/queries/ourProjects/createProject');

exports.post = (req, res) => {

    console.log(req.body, ' req.body');
    
    createNewProject(req.body, (err, dbResult) =>{
        if(err) console.error(`ERROR IN CREATE NEW PROJECT : ${err}`)
        else{
            console.log('CREATE NEW PROJECT SUCCESS')
            console.log(dbResult, ' : dbResult');
            
        }
    })
}