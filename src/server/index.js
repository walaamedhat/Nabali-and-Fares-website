const express = require('express');
const path = require('path');
const dbConnection = require('./models/connection');


const PORT = 8000;

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use('/*', express.static(path.join(__dirname,'..','..','public','index.html')));

dbConnection.once('open', () => {
  console.log('connection to database established successfully');
  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
});
