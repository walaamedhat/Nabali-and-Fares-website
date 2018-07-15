const Users = require('../../schemas/user_schema');


const deleteUser = (id, callback) => {
  Users.findByIdAndRemove(id, (err, res) => {
    if (err) return callback(err);
    return callback(null, res);
  });
};

module.exports = deleteUser;
