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

}

// Export API Helper
module.exports = helpers