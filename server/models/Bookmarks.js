const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var BookmarksSchema = new Schema({
  userFirstName: {
      type: String,
      default: ''
  },
  userLastName: {
    type: String,
    default: ''
  },
  userId: {
    type: String,
    default: ''
  },
  storeId: {
    type: String,
    default: ''
  },
  sellerId:{
    type: String,
    default: ''
  },
  storeName: {
    type: String,
    default: ''
  },
  storeLocation: {
    type: String,
    default: ''
  },
});

var Bookmarks = mongoose.model("Bookmarks", BookmarksSchema);

module.exports = Bookmarks;
