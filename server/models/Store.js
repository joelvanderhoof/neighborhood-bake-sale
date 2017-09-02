const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
    sellerId: String,  // from local storage
    name: {
        type: String,
        default: ''
    },
    location: { // physical address
        type: String,
        default: ''
    }, 
    orders: [{ // Array of orders
        type: Schema.Types.ObjectId, 
        ref: 'MenuItem'
    }], 
    hours: { // Array of hours
        type: Array,
        default: []
    }, 
    description: {
        type: String,
        default: ''
    },
    storeImage: {
        type: String,
        default: ''
    },
    photos: { // Array of image URLs
        type: Array,
        default: []
    }, 
    certified: { // Store passes inspection
        type: Boolean,
        default: 0
    }, 
 
    menuItems: [{ // Array of review IDs
        type: Schema.Types.ObjectId, 
        ref: 'MenuItem' 
    }], 
    isOpen: { // Store open or closed
        type: Boolean,
        default: 0
    }, 
    reviews: [{ // Array of review IDs
        type: Schema.Types.ObjectId, 
        ref: 'Review' }], 
});

const Store = mongoose.model("Store", StoreSchema);

module.exports = Store;
