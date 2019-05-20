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
app.use(cors());

const environment = process.env.NODE_ENV; // development
const stage = require('./config/config')[environment];

const routes = require('./app/routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const sessionDb = mongoose.connection;

// try {
//   app.use(session({
//     secret: 'work hard',
//     resave: false, //don't save session if unmodified
//     saveUninitialized: false, // don't create session until something stored
//     store: new MongoStore({
//       mongooseConnection: sessionDb
//     })
//   }));
// } catch(err) {
//   console.log(err);
// }


if (environment !== 'production') {
  app.use(logger('dev'));
}

app.use('/api/v1', routes(router));

app.listen(`${stage.port}`, () => {
  console.log(`Server now listening at localhost:${stage.port}`);
});

module.exports = app;