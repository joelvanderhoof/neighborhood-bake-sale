// Axios dependencies for GET/POST requests
const axios = require('axios');

let helpers = {

  getStore(storeID) {
    return axios.get('/store/', {
      params: {
        storeID: storeID
      }
    })
  },

  logIn(credentials) {
    console.log('credentials',credentials);
    return axios.post('/login',  {
        email: credentials.email,
        password: credentials.password
      }
    )
  },

  signup(credentials) {
    console.log('credentials',credentials);
    return axios.post('/signup',  {
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        email: credentials.email,
        password: credentials.password
      }
    )
  }

}

// Export API Helper
module.exports = helpers