const bcrypt = require('bcrypt-nodejs');
const login = require('../../models/queries/dashboard/login');
const jwt = require('jsonwebtoken');



exports.post = (req, res) => {
  login(req.body, (err,result) => {
    if (err) {
      res.status(500).send(JSON.stringify({message: 'User not found'}));
    }
    else {
      const passwordCom = bcrypt.compareSync(req.body.password, result.password);
      if (passwordCom) {
        const token = jwt.sign(result.id, process.env.SECRET_COOKIE);
        res.cookie('accessToken', token);
        res.status(200).send({message:'Login Success'});
      }
      else {
        res.status(401).send(JSON.stringify({message:'Password didn\'t match'}));
      }
    }
  })

}
