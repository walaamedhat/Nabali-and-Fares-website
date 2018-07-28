'use strict';

var findAdminData = require('../../models/queries/dashboard/findAdminData');
var jwt = require('jsonwebtoken');

exports.get = function (req, res) {
  var accessToken = req.cookies.accessToken;

  if (accessToken) {
    var verifyCookie = jwt.verify(accessToken, process.env.SECRET_COOKIE);
    if (verifyCookie) {
      var id = jwt.decode(accessToken);
      findAdminData(id, function (err, result) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send({ username: result.role });
        }
      });
    }
  } else {
    res.status(401).send();
  }
};