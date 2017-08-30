const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MenuItemSchema = new Schema({
    StoreID: String,  // Same as Sellers.ID
    name: String, // physical address
    image: String, // image URL
    description: String,
    price: Number, // price in cents
    inventory: Number
});

const MenuItem = mongoose.model("MenuItem", MenuItemSchema);

module.exports = MenuItem;
