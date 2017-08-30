//Encryption (password hashing)- bCrypt
const bCrypt = require('bcrypt-nodejs');

module.exports = (passport, user) => {
  let User = user;
  let LocalStrategy = require('passport-local').Strategy;

  passport.serializeUser((user, done) => {
    console.log('serialized User', user)
    done(null, user.id);
  });

  // Deserialize the user
  passport.deserializeUser((id, done) => {
    console.log('deserialized id', id)
    User.findById(id).then((user) => {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });
  // Signup uses email as username and will have a hashed password
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request to the callback
  }, (req, email, password, done) => {
    console.log('req body',req.body);
    console.log('email',email);
    console.log('password',password);
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
          console.log(data);
          User.create(data)
            .then((newUser, created) => {
              if (!newUser) {
                return done(null, false);
              }

              if (newUser) {
                return done(null, newUser);
              }
            });
        }
      });
  }));

  //LOCAL SIGNIN
  passport.use('local-signin', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request to the callback
  }, (req, email, password, done) => {
    console.log('req body',req.body);
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
          return done(null, false, {
            message: 'Email does not exist'
          });
        }
        //Checks database if the hashed passwords match
        if (!isValidPassword(user.password, password)) {
          return done(null, false, {
            message: 'Incorrect password.'
          });
        }
        let userinfo = user; // Unsure if this works.
        return done(null, userinfo);
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