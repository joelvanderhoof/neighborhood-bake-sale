const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MenuItemSchema = new Schema({
    sellerId: {
        type: String,
        default: ''
    },  // Same as Sellers.ID
    name: {
        type: String,
        default: ''
    },
    image: { // image url
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    price: { // price in cents
        type: Number,
        default: 0
    },
    inStock: {
        type: Boolean,
        default: 0
    },
});

const MenuItem = mongoose.model("MenuItem", MenuItemSchema);

module.exports = MenuItem;
