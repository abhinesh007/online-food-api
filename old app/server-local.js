const express = require('express');
const bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Configuring the database
// const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect('mongodb://localhost:27017/online-food%2Fbookings')
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

mongoose.connect('mongodb://localhost:27017/Authorisation')
.then(() => {
    console.log("Successfully connected to the database for authorisation");    
}).catch(err => {
    console.log('Could not connect to the database authorisation. Exiting now...', err);
    process.exit();
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