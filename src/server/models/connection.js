const mongoose = require('mongoose');
// require('env2')('./config.env');

const dbUrl = 'mongodb://localhost:27017/Nabali&fares';
mongoose.connect(dbUrl,{ useNewUrlParser: true });
const dbConnection = mongoose.connection;

module.exports = dbConnection;
