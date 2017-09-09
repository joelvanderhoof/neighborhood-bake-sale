const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var CustomerSchema = new Schema({
    _id:  Number,
    firstName: {
        type: String,
        trim: true,
        required: "First name is required"
    },
    lastName: {
        type: String,
        trim: true,
        required: "First name is required"
    },
    password: {
        type: String,
        trim: true,
        required: "Password is required",
        validate: [
            (input) => {
                return input.length >= 10;
            },
            "Password must have 10 characters or more"
        ]
    },
    email: {
        type: String,
        trim: true,
        unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    photo: String, //image URL
    orders: [{
        type: Schema.Types.ObjectId, 
        ref: 'Order'}] // Array of orders
});

var Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;
