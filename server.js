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
const API = require('./server/routes/api');

// Use body parser to parse incoming requests as json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(cookieParser());

// Passport ------------------------------------------------------------------
app.use(session({
    secret: 'benColeIsAwesome1',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.use(passport.initialize());
app.use(passport.session());

// Serve files from the public folder
app.use(express.static(path.resolve(__dirname, 'build')));

// Sets login route before /api express routes
app.post('/login',
passport.authenticate('local', { successRedirect: '/',
                                 failureRedirect: '/login',
                                 failureFlash: false }) // set false for now, will revisit
);

// Passport Local Strategy
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (username, password, done) => {
    User.findOne({ username: email },  (err, user) => {
        if (err) { 
            return done(err);
        }
        if (!user) {
            return done(null, false, { message: 'Invalid email.' });
        }
        if (!user.validPassword(password)) {
            return done(null, false, { message: 'Invalid password.' });
        }
        return done(null, user);
    });
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});
// temporarily using dummy deserializedUser
// passport.deserializeUser((id, done) => { 
//     User.findById(id, (err, user) => {
//         done(err, user);
//     });
// });

passport.deserializeUser(function(id, done) {
    console.log('Deserialize user called.');
    return done(null, { firstName: 'Foo', lastName: 'Bar' });
  });

app.get('/login' ,(req,res) => {
    req.login(user, (err) => {
        if (err) {
            return next(err);
        }
        return res.redirect('/users/' + req.user.username);
    });
})


app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});
//-------------------------------------------------------------------------------

//Sets up express routes
app.use('/api', API);

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