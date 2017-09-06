const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    customerId: String,
    customerFirstName: {
        type: String,
        default: ''
    },
    customerLastName: {
        type: String,
        default: ''
    },
    storeId: String,
    storeName: { // Optional? not sure if we should use
        type: String,
        default: ''
    },
    sellerId: String,
    sellerFirstName: { // Might not need
        type: String,
        default: ''
    }, 
    sellerLastName: { // Might not need
        type: String,
        default: ''
    },
    review: { // Review text
        type: String,
        default: ''
    }, 
    rating: { //rating 1-5 stars 
        type: Number,
        default: 5
    }, 
    imageURL: String, // Photo of food -- Maybe remove?
    date: {
        type: Date,
        default: Date.now
    }
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
