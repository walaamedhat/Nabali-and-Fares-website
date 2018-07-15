const Users = require('../../schemas/user_schema');


const createUser = (data, callback) => {
  Users.create({
    role: data.role,
    username: data.name,
    email: data.email,
    password: data.password,
  }).then((res) => {
    console.log(res);
    if (callback && typeof callback === 'function') return callback(null, res);
  })
    .catch((err) => {
      if (callback && typeof callback === 'function') return callback(err);
    });
};


module.exports = createUser;
