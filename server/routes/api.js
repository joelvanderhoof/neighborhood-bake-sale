module.exports = () => {
  //const express = require('express')
  const router = express.Router();
  
  // Basic api route structure
  // Build out with CRUD for app 
  router.route('/seller')
      .get((req, res) => {
          res.send('Get made to /api/seller')
      })
      .post((req, res) => {
          res.send('Post made to /api/seller')
      })
      .put((req, res) => {
          res.send('Put made to /api/seller')
      })
      .delete((req, res) => {
          res.send('Delete made to /api/seller')
      })

          router.route('/customer')
      .get((req, res) => {
          res.send('Get made to /api/customer')
      })
      .post((req, res) => {
          res.send('Post made to /api/customer')
      })
      .put((req, res) => {
          res.send('Put made to /api/customer')
      })
      .delete((req, res) => {
          res.send('Delete made to /api/customer')
      })

          router.route('/order')
      .get((req, res) => {
          res.send('Get made to /api/order')
      })
      .post((req, res) => {
          res.send('Post made to /api/order')
      })
      .put((req, res) => {
          res.send('Put made to /api/order')
      })
      .delete((req, res) => {
          res.send('Delete made to /api/order')
      })

          router.route('/customer')
      .get((req, res) => {
          res.send('Get made to /api/customer')
      })
      .post((req, res) => {
          res.send('Post made to /api/customer')
      })
      .put((req, res) => {
          res.send('Put made to /api/customer')
      })
      .delete((req, res) => {
          res.send('Delete made to /api/customer')
      })

  return router;
};