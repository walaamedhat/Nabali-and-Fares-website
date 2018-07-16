const Users = require('../../schemas/user_schema');


const findUsers = (callback) => {
  Users.findOne({role:
  'Admin'})
    .then(res => callback(null, res))
    .catch(err => callback(err));
};

module.exports = findUsers;
