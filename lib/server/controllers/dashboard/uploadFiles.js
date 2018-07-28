'use strict';

var uploadfiles = require('../../helpers/awsHelper');

exports.post = function (req, res) {
    if (Array.isArray(req.files.image)) {

        uploadfiles(req.files.image).then(function (urls) {
            var arr = urls.map(function (e) {
                return e.Location;
            });
            res.status(200).send({ url: arr });
        }).catch(function (e) {
            console.error(e);
            res.status(500).send(e);
        });
    } else {
        uploadfiles(Array(req.files.image)).then(function (link) {

            res.status(200).send(JSON.stringify({ url: link[0].Location }));
        }).catch(function (err) {
            console.log(err);
            res.status(500).send(err);
        });
    }
};