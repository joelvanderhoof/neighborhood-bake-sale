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
        let newGuy = new User(req.body);
        newGuy.save((err, doc)=> {
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

router.route('/store/:storeID?')
    .get((req, res) => {
        Store.find({
            _id: req.params.storeID
        })
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

router.route('/review/:reviewID?')
    .get((req, res) => {
        Review.find({
                _id: req.params.reviewID
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
                Store.findOneAndUpdate(
                    {
                        _id: req.body.StoreID
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
    });

router.route('/useLater')
    .get((req, res) => {
        console.log("get request");
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

module.exports = router;
