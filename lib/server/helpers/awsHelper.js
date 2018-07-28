'use strict';

var AWS = require('aws-sdk');

var uploadFile = function uploadFile(file) {
    return new Promise(function (resolve, reject) {
        AWS.config.update({
            accessKeyId: process.env.ACCESS_KEY_ID,
            secretAccessKey: process.env.ACCESS_SECRET_KEY
        });

        var S3 = new AWS.S3();

        var options = {
            Body: file.data,
            Bucket: process.env.BUCKET_NAME + '/mcimages',
            Key: file.name,
            ACL: 'public-read'
        };
        S3.upload(options, function (err, result) {
            if (err) {
                return reject(err);
            } else {
                return resolve(result);
            }
        });
    });
};

var uploadfiles = function uploadfiles(files) {
    return new Promise(function (resolve, reject) {
        var arr = files.map(function (file) {
            return uploadFile(file);
        });
        try {

            Promise.all(arr).then(function (values) {
                resolve(values);
            });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = uploadfiles;