const uploadfiles = require('../../helpers/awsHelper')

exports.post = (req, res) => {
    if(Array.isArray(req.files.image)){
        uploadfiles(req.files.image).then(urls => {
            res.status(200).send({url: urls});
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


// .then( data => {
//     console.log(data, ' data is heere ');
//     console.log(arrOfUlrs);
//     res.status(200).send({url: arrOfUlrs})
// })