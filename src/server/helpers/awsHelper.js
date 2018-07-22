const AWS = require('aws-sdk')


const uploadFile = (file) => new Promise((resolve, reject) => {
    AWS.config.update({
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.ACCESS_SECRET_KEY
      });

    const S3 = new AWS.S3();

    const options = {
        Body: file.data,
        Bucket: `${process.env.BUCKET_NAME}/mcimages`,
        Key: file.name,
        ACL:'public-read'
    }
    S3.upload(options, (err,result) => {
        if(err){
            return reject(err)
        }else {
            return resolve(result)
        }
    });
});

const uploadfiles = files => new Promise((resolve, reject) => {
    const arr = files.map(file => uploadFile(file));
    try  {

        Promise.all(arr).then(values => {
            resolve(values);
        });
    }
    catch(e) {
        reject(e);
    }
})



module.exports = uploadfiles;
