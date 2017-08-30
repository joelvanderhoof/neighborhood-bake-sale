//Encryption (password hashing)- bCrypt
const bCrypt = require('bcrypt-nodejs');

module.exports = (passport, user) => {
  let User = user;
  let LocalStrategy = require('passport-local').Strategy;

  passport.serializeUser((user, done) => {
    console.log('User has been serialized. \n user Id: ', user.id)
    done(null, user.id);
  });

  // Deserialize the user
  passport.deserializeUser((id, done) => {
    console.log('User has been deserialized. Id: ', id)
    User.findById(id).then((user) => {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });
// -----------------------------------------------------------------------------------------
  // Signup uses email as username and will have a hashed password
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request to the callback
  }, (req, email, password, done) => {
    console.log('Sign up has been received: \n',req.body);
    let generateHash =  (password) => {
      return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
    };
    //Queries database to locate a single email
    User.findOne({
        email: req.body.email
      })
      .then((user) => {
        //Checks database if the email already exists
        if (user.length = 0) {
          console.log('user', user);
          return done(null, false, {
            message: 'That email is already taken'
          });
        } else {
          //Hashes password
          let userPassword = generateHash(password);
          let data = {
            email: email,
            password: userPassword,
            firstName: req.body.firstName,
            lastName: req.body.lastName
          };
          //Creates user with password
          console.log('This object will be created on mongo: \n',data);
          User.create(data)
            .then((newUser, created) => {
              if (!newUser) {
                return done(null, false);
              }else {
                return done(null, newUser);
              }
            });
        }
      });
  }));
// -----------------------------------------------------------------------------------------
  //LOCAL login
  passport.use('local-login', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request to the callback
  }, (req, email, password, done) => {
    console.log('Log in has been received: \n',req.body);
    let User = user;
    let isValidPassword =  (userpass, password) => {
      return bCrypt.compareSync(password, userpass);
    };
    //Queries database to locate a single email
    User.findOne({
        email: req.body.email
      })
      .then( (user) => { 
        //Checks database if the email already exists
        if (!user) {
          console.log(`Email is invalid: ${req.body.email}`)
          return done(null, false, {
            message: 'Email does not exist'
          });
        }
        //Checks database if the hashed passwords match
        if (!isValidPassword(user.password, password)) {
          console.log('Invalid Password')
          return done(null, false, {
            message: 'Incorrect password.'
          });
        }
        console.log('User object to be returned: \n',user)
        return done(null, user);
        //Error handler
      })
      .catch( (err) => {
        console.log("Error:", err);
        return done(null, false, {
          message: 'Something went wrong with your Signin'
        });
      });
  }));
};