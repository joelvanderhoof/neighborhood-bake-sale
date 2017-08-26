// Require dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
//const config = require('./config');

//const localSignupStrategy = require('./server/passport/local-signup');
//const localLoginStrategy = require('./server/passport/local-signin');


//Mongo/Mongoose --------------------------------------------------------------
//const db = require('./models');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

// Use for development
//const DBconnect = 'mongodb://localhost/neighborhood-bake-sale';

// Use for production
const DBconnect = 'mongodb://<dbuser>:<dbpassword>@ds119578.mlab.com:19578/heroku_hlgv59g4';

// Configure DB
mongoose.Promise = Promise;
mongoose.connect(DBconnect);
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
const API = require('./server/routes/api');

// Use body parser to parse incoming requests as json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(cookieParser());

// Serve files from the public folder
app.use(express.static(path.resolve(__dirname, 'build')));

// app.use(express.static('./server/static/'));
// app.use(express.static('./client/dist/'));


//Sets up express routes
app.use('/api', API);
//RTCSessionDescription
// Serve home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

//Sets up express to handle 404 NOT FOUND
app.use((req, res)=> {
    res.status(404).send('404: Sorry the page you requested is not on this server.');
});

//Sets up express to handle 500 INTERNAL SERVER ERROR
app.use(function(error, req, res) {
    res.status(500).send('500: Internal Server Error');
});


// Start server
    app.listen(PORT,()=>{
        console.log(`The server is listening on port${PORT}`);
    });
