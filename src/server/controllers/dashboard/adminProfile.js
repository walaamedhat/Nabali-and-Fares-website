const bcrypt = require('bcrypt-nodejs');
const updateAdminData = require('../../models/queries/dashboard/updateAdminData');
const findAdminData = require('../../models/queries/dashboard/findAdminData');
const jwt = require('jsonwebtoken');


const password = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(password, salt);
  return passwordHash;

}


exports.post = (req, res) => {
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
          if (req.body.oldPassword.trim() !== '' || req.body.newPassword.trim() !== '') {
            const passwordCom = bcrypt.compareSync(req.body.oldPassword, result.password);
            if (passwordCom) {
              const newPassword = password(req.body.newPassword);
              updateAdminData(id,req.body, newPassword, (err,result) => {
                if (err) {
                  res.status(500).send(err)
                }
                else {
                  res.status(200).send({message: 'Update Success'});
                }
              })

            }

            else {
              res.status(401).send({message: 'This is not old password'});

            }
          }
          else {

            res.send({message: 'Write Password Please!'})
          }

      }
      })

    }
  }

}

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
          res.status(200).send({username:result.username})
        }
      })

    }
  }
}
