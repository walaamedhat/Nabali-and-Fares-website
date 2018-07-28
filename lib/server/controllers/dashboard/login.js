'use strict';

var bcrypt = require('bcrypt-nodejs');
var login = require('../../models/queries/dashboard/login');
var jwt = require('jsonwebtoken');

exports.post = function (req, res) {
  login(req.body, function (err, result) {
    if (err) {
      res.status(500).send(JSON.stringify({ message: 'User not found' }));
    } else {
      var passwordCom = bcrypt.compareSync(req.body.password, result.password);
      if (passwordCom) {
        var token = jwt.sign(result.id, process.env.SECRET_COOKIE);
        res.cookie('accessToken', token);
        res.status(200).send({ message: 'Login Success' });
      } else {
        res.status(401).send(JSON.stringify({ message: 'Password didn\'t match' }));
      }
    }
  });
};