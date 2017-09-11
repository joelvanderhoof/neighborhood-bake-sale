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
            .populate('stores')
            .populate('bookmarks')
            .populate('reviews')
            .populate('bookmarks')
            .exec((err, doc) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(doc);
                }
            });
    })
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
        }, function (err) {
            if (err) return handleError(err);
        });
    });

router.route('/store/:sellerId?')
    .get((req, res) => {
        Store.findOneAndUpdate({
                _id: req.params.sellerId
            }, {
                upsert: true
            })
            .populate('menu')
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
                User.findOneAndUpdate({
                        _id: req.body.sellerID
                    }, {
                        $push: {
                            'stores': doc._id
                        }
                    }, {
                        new: true
                    },
                    function (error, doc) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.send(doc);
                        }
                    })
            }
        });
    })
    // Send an array of objects in req.body.stores
    .put((req, res) => {
        req.body.users.forEach((storeData) => {
            Store.update({
                    _id: storeData.id
                },
                storeData,
                (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
        })
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
                Store.findOneAndUpdate({
                        _id: req.body.StoreID
                    }, {
                        $push: {
                            'menu': doc._id
                        }
                    }, {
                        new: true
                    },
                    function (error, doc) {
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

router.route('/order/:storeId?')
    .get((req, res) => {
        Order.find({
                storeId: req.params.storeId
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
        console.log('req body', req.body)
        let orderData = new Order(req.body);
        orderData.save((err, doc) => {
            if (err) {
                console.log(err);
            } else {
                User.findOneAndUpdate({
                        _id: req.body.customerId
                    }, {
                        $push: {
                            'orders': doc._id
                        }
                    }, {
                        new: true
                    },
                    function (error, doc) {
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
        req.body.orders.forEach((orderData) => {
            Order.update({
                    _id: orderData.id
                },
                orderData,
                (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
        })
    })
    .delete((req, res) => {
        Order.remove({
                _id: req.params.orderID
            },
            (err) => {
                if (err) return handleError(err);
            });
    });


router.route('/useLater')
    .get((req, res) => {
        res.send('Get made to /api/useLater')
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

// Randy's secure routes
router.route('/bookmark')
    .post((req, res) => {
        console.log(req.body)
        let bookmark = new Bookmarks(req.body);
        bookmark.save((err, doc) => {
            if (err) {
                console.log(err.message);
            } else {
                User.findOneAndUpdate({_id: req.body.userId}, 
                    { $push: {'bookmarks': doc._id} },
                        () => {
                            console.log('Store was bookmarked');
                        })
            }
        });
    })
    .delete((req, res) => {
        Bookmarks.findOne({
            sellerId: req.body.sellerId,
            userId: req.body.userId
        }, (err, doc) => {
            if (doc) {
                let bookmarkId = doc._id;
                Bookmarks.remove({
                    _id: bookmarkId
                }, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Bookmark was deleted.');
                        User.findOneAndUpdate({
                            _id: req.body.userId
                        }, {
                            $pull: {
                                'bookmarks': doc._id
                            }
                        }, {
                            multi: true
                        },
                        (error, doc) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log('Store was removed from User') // This is not true until the bookmark object Id is added to the User
                                res.send(doc);
                            }
                        })
                    }
                })
            } else {
                console.log('No Bookmark record found.')
            }
        })
    });

router.route('/review/:sellerId?')
    .post((req, res) => {
        let reviewData = new Review(req.body);
        reviewData.save((err, doc) => {
            if (err) {
                console.log(err);
            } else {
                User.findOneAndUpdate({
                        _id: req.body.customerId
                    }, {
                        $push: {
                            'reviews': doc._id
                        }
                    }, {
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
    .delete((req, res) => {
        Review.remove({
            _id: req.params.reviewID
        }, (err) => {
            if (err) return handleError(err);
        });
});
module.exports = router;