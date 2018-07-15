const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var cors = require('cors')

const PORT = 8000;

const app = express();


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


app.use('/savadata', cors(), (req, res) => {
  console.log(req, ' req');
  res.status(201).send();
});

app.use(express.static(path.join(__dirname, '../../public')));
app.use('/*', express.static(path.join(__dirname,'..','..','public','index.html')));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
