const tape = require('tape');
const Users = require('../src/server/models/schemas/user_schema');
const createUser = require('../src/server/models/queries/user/create_user');
const findUser = require('../src/server/models/queries/user/find_user');
const updateUser = require('../src/server/models/queries/user/update_user');
const deleteUser = require('../src/server/models/queries/deleteAny');


// tape('dropping the schemas at the start of the test', (t) => {
//   Promise.all([
//     Users.remove({})
//   ]).then(() => {
//     Users.find({}).then((res) => {
//       t.equal(res.length, 0, 'Users schema has been dropped');
//     });
//     t.end();
//   })
//     .catch(err => t.end(err));
// });

tape('adding a new user to the database', (t) => {
  const data = {
      role: 'Admin',
      name: 'Admin',
  };
  createUser(data, (err, res) => {
    console.log(data)
    t.equal(res.role, 'Admin', 'role should be Admin');
    t.end();
  });
});


// tape('find user in database', (t) => {
//   findUser((err,res)=>{
//       console.log(res);
//     t.equal(res.role, 'Admin', 'role should be Admin');
//     t.end();

//   })
//   });

//
// tape('update user',(t) => {
//   const data = {
//     id:'5b49bf150d8f003659ea3d47',
//     role:'User',
//     name: 'mahmoud',
//     email: 'mahmoud@gmail.com',
//     password: '123456'
//   }
//   updateUser(data,(err,res) => {
//     console.log(res,'response');
//     console.log(err,'error');
//     t.equal(res.role, 'User', 'role should be Admin');
//     t.end();
//   })
// })
//
// tape('delete User',(t) => {
//   deleteUser(Users,'5b49d103d8a2a84842495421', (err,res) => {
//     console.log(res);
//     console.log(err);
//     t.end();
//   })
// })
