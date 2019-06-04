const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addressSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: 'String',
    required: true,
    trim: true,
    unique: true
  },
  contact: String,
  address1: String,
  address2: String,
  city: String,
  zip: String,
  saveAddress: Boolean
});


module.exports = mongoose.model('Address', addressSchema);