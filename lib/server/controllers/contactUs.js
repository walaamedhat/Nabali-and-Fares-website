'use strict';

var nodemailer = require('nodemailer');

exports.post = function (req, res) {
  console.log(req.body);
  var transporter = nodemailer.createTransport({
    host: 'hostSTMP',
    secure: false, // disable SSL
    requireTLS: true, // Force TLS
    tls: {
      rejectUnauthorized: false
    },
    service: 'Gmail',
    auth: {
      user: 'walaa.medhat.mohtaseb@gmail.com',
      pass: process.env.EMAIL_PASSWORD
    }
  });
  var mailOptions = {
    from: req.body.email + 's',
    to: 'm0597731363@gmail.com',
    subject: 'Nabali And Fares',
    text: 'Name :  ' + req.body.Fname + req.body.Lname + '\n    Content: ' + req.body.messasge + '\n    from : ' + req.body.email
  };

  transporter.sendMail(mailOptions, function (error) {
    if (error) res.status(500).json({ message: error.message });else {
      res.json({ message: 'Email sent successfully' });
    }
  });
};