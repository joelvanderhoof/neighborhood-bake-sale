const express = require('express');
const router = express.Router();

// Require Mongoose Models
const User = require('./../models/User');
const Store = require('./../models/Store');
const MenuItem = require('./../models/MenuItem');
const Review = require('./../models/Review');
const Order = require('./../models/Order');
const Bookmarks = require('./../models/Bookmarks');

// Basic api route structure
router.route('/user/:userId?')
    .get((req, res) => {
        User.find({
            _id: req.params.userId
        })
            .populate("stores")
            .populate('bookmarks')
            .populate('orders')
            .populate('reviews')
            .exec((err, doc) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(doc);
                }
            });
    })

    // Post most likely will not be used here
    .post((req, res) => {
        let newGuy = new User(req.body);
        newGuy.save((err, doc) => {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        });
    })

    // Send an array of objects in req.body.users
    .put((req, res) => {
        req.body.users.forEach((userData) => {
            User.update({
                _id: userData.id
            }, userData, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        })
    })
    .delete((req, res) => {
        User.remove({
            _id: req.params.userID
        }, function(err) {
            if (err) return handleError(err);
        });
    });

router.route('/store/:sellerId?')
    .get((req, res) => {
        Store.find({
            sellerId: req.params.sellerId
        })
            .populate('menu')
            .populate('reviews')
            .exec((err, doc) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(doc);
                }
            });
    })
    .post((req, res) => {
        let storeData = new Store(req.body);
        storeData.save((err, doc) => {
            if (err) {
                console.log(err);
            } else {
                User.findOneAndUpdate(
                    {
                        _id: req.body.sellerID
                    },
                    {
                        $push: {
                            'stores': doc._id
                        }
                    },
                    {
                        new: true
                    },
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
        Store.update({
            sellerId: req.params.sellerId
        },
            req.body,
            (err) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send("updated");
                }
            });
    })
    .delete((req, res) => {
        Store.remove({
            _id: req.params.storeID
        },
            (err) => {
                if (err) return handleError(err);
            });
    });

router.route('/menu/:menuitemID?')
    .get((req, res) => {
        MenuItem.find({}, (err, doc) => {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        })
    })
    .post((req, res) => {
        let menuData = new MenuItem(req.body);
        menuData.save((err, doc) => {
            if (err) {
                console.log(err);
            } else {
                Store.findOneAndUpdate(
                    {
                        _id: req.body.StoreID
                    },
                    {
                        $push: {
                            'menu': doc._id
                        }
                    },
                    {
                        new: true
                    },
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
    // Send an array of objects in  req.body.menuItems
    .put((req, res) => {
        req.body.menuItems.forEach((menuItemData) => {
            MenuItem.update({
                _id: menuItemData.id
            },
                menuItemData, (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
        })
    })
    .delete((req, res) => {
        MenuItem.remove({
            _id: req.params.menuitemID
        },
            (err) => {
                if (err) return handleError(err);
            });
    });

router.route('/review/:sellerId?')
    .get((req, res) => {
        Review.find({
            sellerId: req.params.sellerId
        },
            (err, doc) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(doc);
                }
            })
    })
    .post((req, res) => {
        let reviewData = new Review(req.body);
        reviewData.save((err, doc) => {
            if (err) {
                console.log(err);
            } else {
                // Add review ID to the store
                Store.findOneAndUpdate(
                    {
                        _id: req.body.storeId
                    },
                    {
                        $push: {
                            'reviews': doc._id
                        }
                    },
                    {
                        new: true
                    },
                    (error, doc) => {
                        if (err) {
                            console.log(err);
                        } else {
                            //res.send(doc);
                        }
                    })
                //Add review ID to the customer/user
                User.findOneAndUpdate(
                    {
                        _id: req.body.customerId
                    },
                    {
                        $push: {
                            'reviews': doc._id
                        }
                    },
                    {
                        new: true
                    },
                    (error, doc) => {
                        if (err) {
                            console.log(err);
                        } else {
                            res.send(doc);
                        }
                    })
            }
        });
    })
    // Send an array of objects in  req.body.reviews
    .put((req, res) => {
        req.body.reviews.forEach((reviewData) => {
            Review.update({
                _id: reviewData.id
            },
                reviewData,
                (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
        })
    })
    .delete((req, res) => {
        Review.remove({
            _id: req.params.reviewID
        }, (err) => {
            if (err) return handleError(err);
        });
    });

router.route('/order/:storeId?')
    .get((req, res) => {
        Order.find({$or: [
            {sellerId: req.params.storeId},
            {customerId: req.params.storeId}
        ]})
            .exec((err, doc) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(doc);
                }
            });
    })
    .post((req, res) => {
        let orderData = new Order(req.body);
        orderData.save((err, doc) => {
            if (err) {
                console.log(err);
            } else {
                User.findOneAndUpdate(
                    {
                        _id: req.body.customerId
                    },
                    {
                        $push: {
                            'orders': doc._id
                        }
                    },
                    {
                        new: true
                    },
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
        console.log("test");
       console.log(req.body);
       let orderData = req.body;
            Order.update({
                _id: orderData._id
            },
                orderData,
                (err, doc) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.send(doc)
                    }
                });
        
    })
    .delete((req, res) => {
        Order.remove({
            _id: req.params.orderID
        },
            (err) => {
                if (err) return handleError(err);
            });
    });

router.route('/bookmark')
    .put((req, res) => {
        User.findOneAndUpdate(
            {
            _id: req.body.userId
            }, 
            {
            $push: {
                'bookmarkedStores': req.body.storeId
            }
        },
        function(err, doc) {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        })
    })

router.route('/store-marker/:location')
    .get((req, res) => {
        console.log(JSON.stringify(req.params));
        Store.find({
            searchCity: req.params.location
        })
        .exec((err, doc) => {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        });
    })
    .post((req, res) => {
        res.send('Post made to /api/useLater')
    })
    .put((req, res) => {
        res.send('Put made to /api/useLater')
    })
    .delete((req, res) => {
        res.send('Delete made to /api/useLater')
    });


// Login
router.get('/dashboard', (req, res) => {
    res.status(200).json({
        message: 'You\'re authorized to see this secret message.'
    });
});
module.exports = router;
