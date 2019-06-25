require('dotenv').config(); // Sets up dotenv as soon as our application starts

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');

const app = express();
const router = express.Router();
//app.use(cors());


const allowedOrigins = ['http://localhost:4200',
  'https://online-food.herokuapp.com'];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}))

app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    if (req.headers.host === 'your-app.herokuapp.com')
      return res.redirect(301, 'https://online-food-api.herokuapp.com/');
    if (req.headers['x-forwarded-proto'] !== 'https')
      return res.redirect('https://' + req.headers.host + req.url);
    else
      return next();
  } else
    return next();
});

const environment = process.env.NODE_ENV; // development
const stage = require('./config/config')[environment];

const routes = require('./app/routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const sessionDb = mongoose.connection;

if (environment !== 'production') {
  app.use(logger('dev'));
}

app.get('/', (req, res) => {
  res.json({ "message": "Welcome to foodshop API Middleware" });
});
app.use('/api/v1', routes(router));

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server now listening at localhost:${process.env.PORT || 5000}`);
});

module.exports = app;