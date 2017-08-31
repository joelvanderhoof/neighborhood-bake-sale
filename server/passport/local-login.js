const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../config');

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req,email,password,done) => {
  const userData = {
    email: email.trim(),
    password: password.trim()
  };
  // Checks if a user's email exists in the database
  return User.findOne({
    email: userData.email
  }, (err, user) => {
    if (err) {
      return done (err);
    }

    if (!user) {
      const error = new Error('Incorrect email');
      error.name = 'IncorrectCredentialsError';
      return done(error);
    }

    // Checks if a hashed user's password is equal to the database password
    return user.comparePassword(userData.password, (passwordErr, isMatch) => {
      if (err) {
        return done (err)
      }

      if (!isMatch) {
        const error = new Error('Incorrect password');
        error.name = 'incorrectCredentialsError';
        return done(error)
      }

      // sub is a reserved key for a subject item
      const payload = {
        sub: user._id
      };
      // If the user email exists and the passwords match, create a JSON Web Token string
      const token = jwt.sign(payload, config.jwtSecret);
      const data = {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      };

      console.log('------------------');
      console.log('token',token);
      console.log('data',data);
      return done(null, token, data);
    });
  });
});