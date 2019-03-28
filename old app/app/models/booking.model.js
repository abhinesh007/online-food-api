const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
    customerName: String,
    customerContact: String,
    customerEmail: String,
    customerNumberOfGuests: Number,
    customerDateOfArrival: String,
    customerAdditionalInfo: String,
    customerBookingId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Booking', BookingSchema);