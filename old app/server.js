const express = require('express');
const bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

//SET MONGOLAB_URI="mongodb://abhinesh007:abhinesh77@ds121301.mlab.com:21301/heroku_1ld3k6rl"

mongoose.connect(process.env.MONGOLAB_URI, function (error) {
    if (error) console.error('Could not connect to the database. Exiting now...', error);
    else console.log('Successfully connected to the database');
});

// Authorisation code

mongoose.connect(process.env.MONGOLAB_URI, function (error) {
    if (error) console.error('Could not connect to the database for authorisation. Exiting now...', error);
    else console.log('Successfully connected to the database for authorisation');
});

var authDB = mongoose.connection;
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: authDB
    })
  }));


// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyBooking application. Take bookings quickly. Organize and keep track of all your bookings."});
});

require('./app/routes/booking.routes.js')(app);
require('./app/routes/user.routes.js')(app);

// listen for requests
app.listen(process.env.PORT || 5000, () => {
    console.log("Server is listening on port", process.env.PORT || 5000);
});