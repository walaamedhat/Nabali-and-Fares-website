const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConnection = require('./models/connection');
const routes = require('./controllers/routes');

const PORT = 8000;

const app = express();


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1/', routes);
app.use(express.static(path.join(__dirname, '../../public')));
app.use('/*', express.static(path.join(__dirname,'..','..','public','index.html')));

dbConnection.once('open', () => {
  console.log('connection to database established successfully');
  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
});
