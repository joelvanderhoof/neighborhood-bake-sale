const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StoreSchema = new Schema({
    storeID: String,
    storeID: String,  // Same as Sellers.ID
    location: String, // physical address
    menu: [{
        type: Schema.Types.ObjectId, 
        ref: 'MenuItem' }], // Array of orders
    hours: Array, // Array of objects of day + hours
    description: String,
    photos: Array, // Array of image URLs
    certified: Boolean, // Store passes inspection
    reviews: [{
                type: Schema.Types.ObjectId, 
                ref: 'Review' }], // Array of review IDs
});

const Store = mongoose.model("Store", StoreSchema);

module.exports = Store;
