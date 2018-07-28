'use strict';

var bcrypt = require('bcrypt-nodejs');
var updateAdminData = require('../../models/queries/dashboard/updateAdminData');
var findAdminData = require('../../models/queries/dashboard/findAdminData');
var jwt = require('jsonwebtoken');

var password = function password(_password) {
  var salt = bcrypt.genSaltSync(10);
  var passwordHash = bcrypt.hashSync(_password, salt);
  return passwordHash;
};

exports.post = function (req, res) {
  var accessToken = req.cookies.accessToken;

  if (accessToken) {
    var verifyCookie = jwt.verify(accessToken, process.env.SECRET_COOKIE);
    if (verifyCookie) {
      var id = jwt.decode(accessToken);
      findAdminData(id, function (err, result) {
        if (err) {
          res.status(500).send(err);
        } else {
          if (req.body.oldPassword.trim() !== '' || req.body.newPassword.trim() !== '') {
            var passwordCom = bcrypt.compareSync(req.body.oldPassword, result.password);
            if (passwordCom) {
              var newPassword = password(req.body.newPassword);
              updateAdminData(id, req.body, newPassword, function (err, result) {
                if (err) {
                  res.status(500).send(err);
                } else {
                  res.status(200).send({ message: 'Update Success' });
                }
              });
            } else {
              res.status(401).send({ message: 'This is not old password' });
            }
          } else {

            res.send({ message: 'Write Password Please!' });
          }
        }
      });
    }
  }
};

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
          res.status(200).send({ username: result.username });
        }
      });
    }
  }
};