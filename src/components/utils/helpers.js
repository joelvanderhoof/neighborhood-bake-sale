// Axios dependencies for GET/POST requests
const axios = require('axios');
const Auth = require('./Auth');

let helpers = {

  getStore(storeID) {
    return axios.get('api/store/'+ storeID)
  },

  getPublicStore(sellerId) {
    return axios.get('./../api/store/'+ sellerId)
  },

  getPublicReview(sellerId) {
    return axios.get('./../api/review/'+ sellerId)
  },

  logIn(credentials) {
    return axios.post('/auth/login',  {
        email: credentials.email,
        password: credentials.password
      }
    )
  },

  signup(credentials) {
    return axios.post('/auth/signup',  {
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        email: credentials.email,
        password: credentials.password
      }
    )
  },

  // getUser is an untested function
  getUser(id, token) {
    return axios.get(`/api/user/${id}`, {
      headers: token
    });
  },

  saveStore(storeID, storeData) {
    return axios.put("api/store/" + storeID, storeData)
  }
}

// Export API Helper
module.exports = helpers