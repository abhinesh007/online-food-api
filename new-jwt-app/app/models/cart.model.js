const mongoose = require('mongoose');
// const FoodItem = require('../models/shop.model').FoodItemSchema;

let cartSchema = new mongoose.Schema({
    cartItems: Array,
    cartId: String,
    promoCode: String,
    storeId: String,
    storeName: String,
    storeId: String,
    userName: String,
    userUuid: String,
    isUserValidate: Boolean,
});

module.exports =  mongoose.model('Cart', cartSchema);