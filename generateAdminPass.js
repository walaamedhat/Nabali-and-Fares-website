const bcrypt = require('bcrypt-nodejs');



const password = () => {
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync('Admin', salt);
  return passwordHash;

}


password();
