const mongoose = require('mongoose');
// const FoodItem = require('../models/shop.model').FoodItemSchema;

let cartSchema = new mongoose.Schema({
  cartItems: {
    valid: Array,
    invalid: Array
  },
  cartStatus: {
    cartId: {
      type: 'String',
      required: true,
      trim: true,
      unique: true
    },
    cartTotal: Number,
    status: String,
    statusMsg: String,
    promoCode: String,
    storeId: String,
    storeName: String,
    storeId: String,
    userName: String,
    userUuid: String,
    isUserValidate: Boolean
  },
  createdAt: { type: Date, expires: '15s', default: Date.now }
});

module.exports = mongoose.model('Cart', cartSchema);