const mongoose = require('mongoose');
require('env2')('./config.env');

const dbUrl = process.env.DB;
mongoose.connect(dbUrl,{ useNewUrlParser: true });
const dbConnection = mongoose.connection;

module.exports = dbConnection;
