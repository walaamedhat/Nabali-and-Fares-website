const uploadfiles = require('../../helpers/awsHelper')

exports.post = (req, res) => {
    if(Array.isArray(req.files.image)){
        
        uploadfiles(req.files.image).then(urls => {
            const arr = urls.map(e => {return e.Location})
            res.status(200).send({url: arr});
        }).catch(e => {
            console.error(e);
            res.end();
        });
        
    }

    else{
        uploadfiles(Array(req.files.image)).then(link =>{
            
            res.status(200).send(JSON.stringify({url : link[0].Location}))
        }).catch(err => {
            console.log(err);
            res.status(500).send(err)
            
        })
    }
}