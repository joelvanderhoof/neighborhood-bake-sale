const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    customerId: String,
    storeId: String,  // store Id = seller Id
    review: String,
    rating: Number, //rating 1-5 stars 
    imageURL: String // Photo of food
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
