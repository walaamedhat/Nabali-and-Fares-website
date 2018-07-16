const morgan = require('morgan');
const bodyParser = require('body-parser');
const logger = require('./logger.js');
const path = require('path');
var cors = require('cors')


var corsOptions = {
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200
}
  
module.exports = (app, express) => {
  app.use(express.static(path.join(__dirname, '../../public')));
  app.use('/*', express.static(path.join(__dirname,'..','..','public','index.html')));  
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(logger);
  app.use(cors(corsOptions));
};
