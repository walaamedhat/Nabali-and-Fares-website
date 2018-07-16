const bcrypt = require('bcrypt-nodejs');
const login = require('../../models/queries/dashboard/login');



exports.post = (req, res) => {
  console.log(req.body,'req.body');
  login(req.body, (err,result) => {
    if (err) {
      res.status(500).send(JSON.stringify({message: 'User not found'}));
    }
    else {
      const passwordCom = bcrypt.compareSync(req.body.password, result.password);
      if (passwordCom) {
        res.status(200).send({message:'Login Success'});
      }
      else {
        res.status(401).send(JSON.stringify({message:'Password didn\'t match'}));
      }
    }
  })

}
