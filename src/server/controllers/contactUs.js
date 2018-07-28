const nodemailer = require('nodemailer');

exports.post = (req, res) => {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    host: 'hostSTMP',
    secure: false, // disable SSL
    requireTLS: true, // Force TLS
    tls: {
      rejectUnauthorized: false,
    },
    service: 'Gmail',
    auth: {
      user: 'nicedree@gmail.com',
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: `${req.body.email}s`,
    to: 'walaa.medhat.mohtaseb@gmail.com',
    subject: 'Nabali And Fares',
    text:
    `
    Name :  ${req.body.Fname}${req.body.Lname}
    Content: ${req.body.messasge}
    From : ${req.body.email}
    FaceBook_Profile: ${req.body.FaceLink}
    Instagram_Profile: ${req.body.InstaLink}
    Phone: ${req.body.Phnum}
    `

  };

  transporter.sendMail(mailOptions, (error) => {
    if (error){
      console.error(error);
       res.status(500).json({ message: error.message });}
    else {
      console.log('Email sent successfully');
       res.json({ message: 'Email sent successfully' });
    }
  });
};
