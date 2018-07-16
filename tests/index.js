const tape = require('tape');
const connection = require('../src/server/models/connection');


connection.once('open', () => {
  Promise.resolve()
    .then(require('./test')) 
  tape.onFinish(() => {
    connection.close();
  });
});
