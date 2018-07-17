const findAdminData = require('../../models/queries/dashboard/findAdminData');
const jwt = require('jsonwebtoken');

exports.get = (req, res) => {
  const { accessToken } = req.cookies;
  if (accessToken) {
    const verifyCookie = jwt.verify(accessToken, process.env.SECRET_COOKIE);
    if (verifyCookie) {
      const id = jwt.decode(accessToken);
      findAdminData(id,(err,result) => {
        if (err) {
          res.status(500).send(err);
        }
        else {
          res.send({username:result.role})
        }
      })
    }
  }
  else {
    res.status(401).send()
  }
}
