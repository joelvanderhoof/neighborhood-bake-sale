// Require dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

//Mongo/Mongoose --------------------------------------------------------------
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const DBconnect = 'mongodb://tiger-foodie:benColeIsAwesome1@ds119578.mlab.com:19578/heroku_hlgv59g4';

// Configure DB
mongoose.Promise = Promise;
mongoose.connect(DBconnect, { useMongoClient: true });
const db = mongoose.connection;

db.on('error', (err) => {
    console.error(`Mongoose error: ${err}`);
});

db.once('openUri', () => {
    console.log(`Mongoose connected`);
});
//-------------------------------------------------------------------------------

// Initialize express app
const app = express();
const PORT = process.env.PORT || 8080;

// Use body parser to parse incoming requests as json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(cookieParser());

// Serve files from the public folder
app.use(express.static(path.resolve(__dirname, 'build')));

//Sets up express routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
// Pass the authenticaion checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// Passport ------------------------------------------------------------------

app.use(passport.initialize());

// Load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

//-------------------------------------------------------------------------------



// Serve home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//Sets up express to handle 404 NOT FOUND
app.use((req, res)=> {
    res.status(404).send('404: Sorry the page you requested is not on this server.');
});

//Sets up express to handle 500 INTERNAL SERVER ERROR
app.use((error, req, res) => {
    res.status(500).send('500: Internal Server Error');
});

// Start server
app.listen(PORT,()=>{
    console.log(`The server is listening on port ${PORT}`);
});