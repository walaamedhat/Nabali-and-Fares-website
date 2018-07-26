const Users = require('../../schemas/user_schema');


const findUsers = (id , callback) => {  
  Users.findOne({_id:id})
    .then(res => {
      callback(null, res)})
    .catch(err => callback(err));
};

module.exports = findUsers;
