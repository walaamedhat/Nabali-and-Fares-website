const Users = require('../../schemas/user_schema');


const updateAdminData = (id,data,password,callback) => {
  Users.findByIdAndUpdate(id, {
    $set: {
      role:'Admin',
      username: data.username,
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
