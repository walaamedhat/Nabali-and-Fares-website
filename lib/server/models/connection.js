'use strict';

var mongoose = require('mongoose');
require('env2')('./config.env');

var dbUrl = process.env.DB;
mongoose.connect(dbUrl, { useNewUrlParser: true });
var dbConnection = mongoose.connection;

module.exports = dbConnection;