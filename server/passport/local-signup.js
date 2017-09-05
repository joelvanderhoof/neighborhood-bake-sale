const User = require('mongoose').model('User');
const Store = require('mongoose').model('Store');
const PassportLocalStrategy = require('passport-local').Strategy;

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
    firstName: req.body.firstName.trim(),
    lastName: req.body.lastName.trim()
  };

  const newUser = new User(userData);
  newUser.save((err) => {
    if (err) {
      return done(err);
    }
    return done(null);
  }).then(()=>{
    User.findOne({
      email: userData.email
    }, (err, user) => {
      if(err) {
        return console.log('error: ', err);
      }
      Store.create({
        sellerId: user._id,
        firstName: user.firstName,
        lastName: user.lastName
      })
    }
  )});
});