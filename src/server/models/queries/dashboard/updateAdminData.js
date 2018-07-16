const Users = require('../../schemas/user_schema');


const updateAdminData = (name,password,callback) => {
  Users.findByIdAndUpdate(data.id, {
    $set: {
      role:'Admin',
      username: name,
      password: password
    },
  },
  { new: true },
  (error, result) => {
    if (error) return callback(error);
  })
    .then(res => callback(null, res))
    .catch(err => callback(err));
};

module.exports = updateAdminData;
