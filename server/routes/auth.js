let authController = require('../passport/authcontroller.js');
//Exports to ../server.js
module.exports = function (app, passport) {
    app.get('/signup', authController.signup);
    app.get('/login', authController.signin);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup'
    }));
    app.get('/home', authController.home);
    app.get('/logout', authController.logout);
    app.post('/login', passport.authenticate('local-signin', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/login');
    }
};