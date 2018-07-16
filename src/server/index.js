const express = require('express');
const path = require('path');
const PORT = 8000;

const app = express();

require('./middlewares/appMiddlewares')(app, express);

app.use(express.static(path.join(__dirname, '../../public')));
app.use('/*', express.static(path.join(__dirname,'..','..','public','index.html')));

app.use('/savadata',(req, res) => {
  console.log(req.body, ' req route');
  res.json({msg: 'This is CORS-enabled for only example.com.'});
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
