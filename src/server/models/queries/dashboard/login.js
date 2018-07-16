const Users = require('../../schemas/user_schema');


const findUsers = (data , callback) => {
  Users.findOne({username:data.username})
    .then(res => callback(null, res))
    .catch(err => callback(err));
};

module.exports = findUsers;
