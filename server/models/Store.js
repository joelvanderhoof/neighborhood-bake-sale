const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
    sellerId: String,  // from local storage
    name: {
        type: String,
        default: 'My Dream Restaurant'
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
        default: ["8:00AM-9:00PM","8:00AM-9:00PM","8:00AM-9:00PM","8:00AM-9:00PM","8:00AM-9:00PM","8:00AM-9:00PM","8:00AM-9:00PM",]
    }, 
    description: {
        type: String,
        default: 'Enter your store description'
    },
    storeImage: {
        type: String,
        default: 'https://static.pexels.com/photos/8717/food-pot-kitchen-cooking.jpg'
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
