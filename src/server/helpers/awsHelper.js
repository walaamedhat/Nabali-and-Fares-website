const AWS = require('aws-sdk')





// const uploadfiles= (image, cb) => {
//     AWS.config.update({
//         accessKeyId: process.env.ACCESS_KEY_ID,
//         secretAccessKey: process.env.ACCESS_SECRET_KEY
//       });
      
//     const S3 = new AWS.S3();
    
//     const options = {
//         Body: image.data,
//         Bucket: `${process.env.BUCKET_NAME}/mcimages`,
//         Key: image.name
//     }
    
//     S3.upload(options, (err,result) => {
//         if(err){
//         console.log('error in s3', err);
//             return cb(err)
//         }else {
//         console.log('upload done');
//             return cb(null, result)
//         }
//     })
// }

const uploadFile = (file) => new Promise((resolve, reject) => {
    AWS.config.update({
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.ACCESS_SECRET_KEY
      });

    const S3 = new AWS.S3();

    const options = {
        Body: file.data,
        Bucket: `${process.env.BUCKET_NAME}/mcimages`,
        Key: file.name
    }
    S3.upload(options, (err,result) => {
        if(err){
        console.log('error in s3', err);
            return reject(err)
        }else {
        console.log('upload done');
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