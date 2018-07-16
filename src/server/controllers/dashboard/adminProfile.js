const bcrypt = require('bcrypt-nodejs');
const updateAdminData = require('../../models/queries/dashboard/updateAdminData');
const findAdminData = require('../../models/queries/dashboard/findAdminData');


const password = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(password, salt);
  return passwordHash;

}


exports.post = (req, res) => {
  const password = (req.body.password);
  updateAdminData(req.body.name, password, (err,result) => {
    if (err) {
      res.status(500).send(err)
    }
    else {
      res.status(200).send('Update Success');
    }
  })

}

exports.get = (req, res) => {
    findAdminData(req.params.id,(err,result) => {
      if (err) {
        res.status(500).send(err);
      }
      else {
        res.status(200).send(result.username)
      }
    })
}
