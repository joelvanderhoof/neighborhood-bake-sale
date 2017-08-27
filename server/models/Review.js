const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var ReviewSchema = new Schema({
    customerID: String,
    storeID: String,  // Same as Store.ID from 
    review: String,
    rating: Number, //rating 1-5 stars 
    imageURL: String // Photo of food
});

var Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
