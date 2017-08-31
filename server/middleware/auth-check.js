const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const config = require('../config');

// Example token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
// Tokens consist of 3 encoded parts divided by .'s:
// header(HS256 algorithm and token type).payload(data).signature(secret key phrase)

module.exports = (req,res,next) => {
  if(!req.headers.authorization) {
    return res.status(401).end();
  }

  // Get the last part from an authorization header string
  const token = req.headers.authorization.split(' ')[0];
  // Decode the token using a secret key phrase
  return jwt.verify(token,config.jwtSecret,(err,decoded) => {
    // the 401 code is for unauthorized status
    if (err) {
      return res.status(401).end();
    }

    const userId = decoded.sub
    // Checks if a user exists
    return User.findById(userId, (userErr, user) => {
      if(userErr || !user) {
        return res.status(401).end();
      }
      return next();
    });
  });
};