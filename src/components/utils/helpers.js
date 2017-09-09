// Axios dependencies for GET/POST requests
const axios = require('axios');

let helpers = {

  getStore(storeID) {
    return axios.get('api/store/' + storeID)
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

  // Randy's routes
  getUserSecure(id, token) {
    return axios.get(`./../secure/user/${id}`, {
      headers: {
        authorization: token
      }
    });
  },

  postReview(sellerId,review,token) {
    return axios.post(`./../secure/review/${sellerId}`,{
      review: review.review,
      rating: review.rating,
      customerFirstName: review.customerFirstName,
      customerLastName: review.customerLastName,
      customerId: review.customerId,
      storeName: review.storeName,
      sellerId: review.sellerId
    }, {
      headers: {
        authorization: token
      }
    });
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

  bookmarkStore(storeData, token) {
    return axios.post(`./../secure/bookmark/`, {
      userId: storeData.userId,
      userFirstName: storeData.userFirstName,
      userLastName: storeData.userLastName,
      storeId: storeData.storeId,
      sellerId: storeData.sellerId,
      storeName: storeData.storeName,
      storeLocation: storeData.storeLocation,
    }, {
      headers: {
        authorization: token
      }
    })
  },

  removeBookmark(storeData, token) {
    return axios({
      method: 'delete',
      url: `./../secure/bookmark/`,
      data: {
        userId: storeData.userId,
        storeId: storeData.storeId,
        sellerId: storeData.sellerId,
      },
      headers: {
        authorization: token
      }
    });
  },

  getPublicStore(sellerId) {
    return axios.get('./../api/store/' + sellerId)
  },

  getOrders(sellerID) {
    return axios.get('api/order/' + sellerID);
  },

  getOrdersCustomer(ID) {
    return axios.get('./../api/order/' + ID);
  },

  updateOrderStatus(sellerID, newOrder){
    return axios.put('api/order/' + sellerID, newOrder);
  },

  updateOrderStatusCustomer(sellerID, newOrder){
    return axios.put('./../api/order/' + sellerID, newOrder);
  }
}

// Export API Helper
module.exports = helpers