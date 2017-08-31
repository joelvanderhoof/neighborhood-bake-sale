const express = require('express');
const validator = require('validator');
const passport = require('passport');
const router = express.Router();

// Validates the sign up form
function validateSignupForm(payload) {
    const errors = {}
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
        isFormValid = false;
        errors.email = 'Please provide a correct email address.';
      }

      if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 10) {
        isFormValid = false;
        errors.password = 'Password must have at least 10 characters.';
      }

      if (!payload || typeof payload.firstName !== 'string' || payload.firstName.trim().length === 0) {
        isFormValid = false;
        errors.name = 'Please provide your first name.';
      }

      if (!payload || typeof payload.lastName !== 'string' || payload.lastName.trim().length === 0) {
        isFormValid = false;
        errors.name = 'Please provide your last name.';
      }

      if (!isFormValid) {
        message = 'Check the form for errors.';
      }

      return {
          success: isFormValid,
          message,
          errors
      };
}

// Validates the login form
function validateLoginForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
    isFormValid = false;
    errors.email = 'Please provide your email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = 'Please provide your password.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

router.post('/signup', (req,res,next) => {
    const validationResult = validateSignupForm(req.body);
    console.log('Validation Results: ',validationResult, '\n');
    if (!validationResult.success) {
        return res.status(400).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        });
    }

    return passport.authenticate('local-signup',(err) => {
        if(err) {
            console.log(err.message);
            if(err.name === 'MongoError' && err.code === 11000) {
                // 11000 Mongo code is for dupliate email error
                // 409 HTTP status code is for conflict error
                return res.status(409).json({
                    success: false,
                    message: 'Check the form for errors.',
                    errors: {
                        email: 'This email is already taken.'
                    }
                });
            }

            return res.status(400).json({
                success: false,
                message: 'Could not process the form.'
            });
        }

        console.log('Successfully registered! \n')
        return res.status(200).json({
            success: true,
            message: 'You have successfully signed up! Now you should be able to log in.'
        });
    })(req,res,next);
});

router.post('/login', (req,res,next) => {
    console.log(req.body);
    const validationResult = validateLoginForm(req.body);
    if(!validationResult.success) {
        return res.status(400).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        });
    }

    return passport.authenticate('local-login', (err,token,userData) => {
        if(err) {
            if(err.name === 'IncorrectCredentialsError') {
                return res.status(400).json({
                    success: false,
                    message: err.message
                });
            }
            return res.status(400).json({
                success: false,
                message: 'Could not process the form'
            });
        }
        console.log('-------------------------------------------');
        console.log('User has logged in with the following data:');
        console.log('JSON Web Token',token);
        console.log('userData', userData)
        console.log('-------------------------------------------');
        return res.json({
            success: true,
            message: 'You have successfully logged in!',
            token,
            user: userData
        });
    })(req,res,next);
});

module.exports = router;
