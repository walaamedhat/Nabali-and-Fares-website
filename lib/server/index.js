'use strict';

require('env2')('config.env');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var dbConnection = require('./models/connection');
var routes = require('./controllers/routes');
var fileUpload = require('express-fileupload');

var PORT = process.env.PORT || 8000;

var app = express();

var corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(fileUpload());
app.use('/api/v1/', routes);
app.use(express.static(path.join(__dirname, '../../public')));
app.use('/*', express.static(path.join(__dirname, '..', '..', 'public', 'index.html')));

dbConnection.once('open', function () {
  console.log('connection to database established successfully');
  app.listen(PORT, function () {
    console.log('Server listening on port: ' + PORT);
  });
});