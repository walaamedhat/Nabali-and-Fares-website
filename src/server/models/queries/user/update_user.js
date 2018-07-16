const Users = require('../../schemas/user_schema');


const updateUsers = (data,callback) => {
  Users.findByIdAndUpdate(data.id, {
    $set: {
      role: data.role,
      username: data.name,
      password: data.password,
    },
  },
  { new: true },
  (error, result) => {
    if (error) return callback(error);
  })
    .then(res => callback(null, res))
    .catch(err => callback(err));
};

module.exports = updateUsers;
