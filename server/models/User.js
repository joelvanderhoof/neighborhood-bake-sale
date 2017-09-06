const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema
const UserSchema = new Schema({
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
    photo: { //image URL
        type: String, 
        default: null
    }, 
    orders: [{ // Array of orders
        type: Schema.Types.ObjectId, 
        ref: 'Order'
    }], 
    isSeller: {
        type: Boolean,
        default: 0
    }, // 
    reviews: [{
        type: Schema.Types.ObjectId, 
        ref: 'Review'
    }],
    stores: [{
        type: Schema.Types.ObjectId, 
        ref: 'Store'
    }],

    bookmarks: [{
        type: Schema.Types.ObjectId,
        ref: 'Bookmarks'
    }],

    // bookmarkedStores: [{
    //     type: Schema.Types.ObjectId,
    //     unique: true,        
    //     ref: 'Store'
    // }]

});

// Compare the passed password with the vlue in the database
UserSchema.methods.comparePassword = function comparePassword(password, callback) {
    bcrypt.compare(password, this.password, callback);
};

// Pre-hook that will hash the password prior to saving it
UserSchema.pre('save', function saveHook(next) {
    const user = this;
    // Proceed further only if the password is hashed or the user is new
    if (!user.isModified('password')) {
        return next();
    }

    return bcrypt.genSalt((saltError,salt) => {
        if (saltError) {
            return next(saltError);
        }

        return bcrypt.hash(user.password, salt, (hasError, hash) => {
            // replace password string with the hashed password
            user.password = hash;

            return next();
        });
    });
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
