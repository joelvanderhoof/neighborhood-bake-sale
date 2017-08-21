const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    customerID: Number, //same as the ID from the Customer collection
    sellerID: String, //same as the ID from the Seller collection
    order: Array, //Array of menu items
    total: Number, //Order sales amount
    status: String, //The status will be set to specific strings by specific functions
    // To check status compare the strings
    
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;