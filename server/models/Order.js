const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    customerID: String, //same as the ID from the Customer model
    sellerID: String, //same as the ID from the Seller collection
    order: [{
            type: Schema.Types.ObjectId, 
            ref: 'MenuItem'}], //Array of menu item IDs
    total: Number, //Order sales amount
    status: String, //The status will be set to specific strings by specific functions
    // To check status compare the strings
    
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;
