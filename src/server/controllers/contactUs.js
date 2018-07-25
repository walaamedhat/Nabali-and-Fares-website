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
      user: 'walaa.medhat.mohtaseb@gmail.com',
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: `${req.body.email}s`,
    to: 'm0597731363@gmail.com',
    subject: 'Nabali And Fares',
    text: `Name :  ${req.body.Fname}${req.body.Lname}
    Content: ${req.body.messasge}
    from : ${req.body.email}`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) res.status(500).json({ message: error.message });
    else {
       res.json({ message: 'Email sent successfully' });
    }
  });
};
