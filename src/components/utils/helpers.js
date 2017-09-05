// Axios dependencies for GET/POST requests
const axios = require('axios');
const Auth = require('./Auth');

let helpers = {

  getStore(storeID) {
    return axios.get('api/store/' + storeID)
  },

  getPublicStore(sellerId) {
    return axios.get('./../api/store/' + sellerId)
  },

  getPublicReview(sellerId) {
    return axios.get('./../api/review/' + sellerId)
  },

  logIn(credentials) {
    return axios.post('/auth/login', {
      email: credentials.email,
      password: credentials.password
    }
    )
  },

  signup(credentials) {
    return axios.post('/auth/signup', {
      firstName: credentials.firstName,
      lastName: credentials.lastName,
      email: credentials.email,
      password: credentials.password
    }
    )
  },

  getUser(id, token) {
    return axios.get(`/api/user/${id}`, {
      headers: {
        authorization: token
      }
    });
  },

  saveStore(storeID, storeData) {
    return axios.put("api/store/" + storeID, storeData)
  },

  placeOrder(storeId, order, token) {
    return axios.post(`./../secure/order/${storeId}`, {
      customerId: order.customerId, //same as the ID from the Customer model
      sellerId: order.sellerId, //same as the ID from the Seller collection
      storeId: order.storeId,
      items: order.items,
      orderTotal: order.orderTotal,
      buyerFirstName: order.buyerFirstName,
      buyerLastName: order.buyerLastName,
      sellerFirstName: order.sellerFirstName,
      sellerLastName: order.sellerLastName
    }, {
      headers: {
        authorization: token
      }
    })
  },
  getOrders(sellerID) {
    return axios.get('api/order/' + sellerID);
  }
}

// Export API Helper
module.exports = helpers