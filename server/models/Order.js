const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    customerID: String, //same as the ID from the Customer model
    sellerID: String, //same as the ID from the Seller collection
    customerName: String,
    storeName: String,
    order: String, //Menu Item Name
    status: String, //The status will be set to specific strings by specific functions
    // To check status compare the strings
    
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
