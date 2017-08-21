const express = require('express');
const router = express.Router();

// Require Mongoose Models
const User = require('./../models/User');
const Store = require('./../models/Store');
const MenuItem = require('./../models/MenuItem');
const Review = require('./../models/Review');
  
// Basic api route structure
router.route('/user/:userID?')
    .get((req, res) => {
        User.find({ _id: req.params.userID })
            .populate("reviews")
            .populate("stores") 
            .exec((err, doc) => {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        });
    })
    .post((req, res) => {
        // res.send('Post made to /api/user')
            let newGuy = new User(req.body);
        newGuy.save((err, doc)=> {
            if (err) {
                console.log(err);
            } else {
                // console.log(JSON.stringify(doc));
                res.send(doc);
            }
        });
    })
    .put((req, res) => {
        res.send('Put made to /api/user')
    })
    .delete((req, res) => {
        res.send('Delete made to /api/user')
    });

router.route('/store/:storeID?')
    .get((req, res) => {
        //res.send('Get made to /api/store')
        Store.find({ _id: req.params.storeID })
            .populate("menu")
            .exec((err, doc) => {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        });
    })
    .post((req, res) => {
        //res.send('Post made to /api/store')
        let storeData = new Store(req.body);
        storeData.save((err, doc)=> {
            if (err) {
                console.log(err);
            } else {
                //console.log(JSON.stringify(doc));
                User.findOneAndUpdate(
                    { _id: req.body.sellerID}, 
                    { $push: { 'stores': doc._id } }, 
                    { new: true }, 
                    function(error, doc) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.send(doc);
                        }
                })
            }
        });
    })
    .put((req, res) => {
        res.send('Put made to /api/store')
    })
    .delete((req, res) => {
        res.send('Delete made to /api/store')
    });

router.route('/menu/:menuitemID?')
    .get((req, res) => {
        //res.send('Get made to /api/menu')
        MenuItem.find({}, (err, doc) => {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        })
    })
    .post((req, res) => {
        //res.send('Post made to /api/menu')
        let menuData = new MenuItem(req.body);
        menuData.save((err, doc)=> {
            if (err) {
                console.log(err);
            } else {
                //console.log(JSON.stringify(doc));
                Store.findOneAndUpdate(
                    { _id: req.body.StoreID}, 
                    { $push: { 'menu': doc._id } }, 
                    { new: true }, 
                    function(error, doc) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.send(doc);
                        }
                })
            }
        });
    })
    .put((req, res) => {
        res.send('Put made to /api/menu')
    })
    .delete((req, res) => {
        res.send('Delete made to /api/menu')
    });

router.route('/review/:reviewID?')
    .get((req, res) => {
        //res.send('Get made to /api/review')
        Review.find({ _id: req.params.reviewID }, (err, doc) => {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        })
    })
    .post((req, res) => {
        //res.send('Post made to /api/review')
        let reviewData = new Review(req.body);
        reviewData.save((err, doc)=> {
            if (err) {
                console.log(err);
            } else {
                //console.log(JSON.stringify(doc));
                Store.findOneAndUpdate(
                    { _id: req.body.StoreID}, 
                    { $push: { 'reviews': doc._id } }, 
                    { new: true }, 
                    function(error, doc) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.send(doc);
                        }
                })
            }
        });
    })
    .put((req, res) => {
        res.send('Put made to /api/review')
    })
    .delete((req, res) => {
        res.send('Delete made to /api/review')
    });

router.route('/customer')
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
    });

router.route('/customer')
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
    });

module.exports = router;
