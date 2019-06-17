const mongoose = require('mongoose');

let orderSchema = new mongoose.Schema({

  cartData: {
    type: 'Object',
    required: true
  },
  paymentData: Object,
  shippingData: Object,
  orderId: {
    type: 'String',
    required: true,
    trim: true,
    unique: true
  },
  orderTime: String,
  userUUID: String,
  // createdAt: { type: Date, expires: '15s', default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);