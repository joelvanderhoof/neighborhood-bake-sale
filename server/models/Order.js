const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    customerId: String, //same as the ID from the Customer model
    sellerId: String, //same as the ID from the Seller collection
    storeId: String, 
    items: Array, //Menu Item Name
    status: { //The status will be set to specific strings by specific functions
        type: String,
        default: 'Pending'
    },
    date: {
        type: Date,
        default: Date.now
    },
    orderTotal: {
        type: Number,
        default: 0
    },
    pickedUp: {
        type: Boolean,
        default: 0
    },
    buyerFirstName:{
        type: String,
        default: ''
    },
    buyerLastName: {
        type: String,
        default: ''
    },
    sellerFirstName: {
        type: String,
        default: ''
    },
    sellerLastName: {
        type: String,
        default: ''
    }
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
