let authController = require('../passport/authcontroller.js');
//Exports to ../server.js
module.exports = function (app, passport) {
    // Log In
    app.get('/login', authController.login);
    app.post('/login',
     passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));

    // Sign Up
    app.get('/signup', authController.signup);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup'
    }));

    // Home
    app.get('/', authController.home);

    // Log Out
    app.get('/logout', authController.logout);
    
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/login');
    }
};