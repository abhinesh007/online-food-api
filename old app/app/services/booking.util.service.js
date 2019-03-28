const Booking = require('../models/booking.model.js');

exports.validateCreateUpdateReq = (req) => {
  if (!req.body.customerName || req.body.customerName == 'undefined' || req.body.customerName == 'null') {
    return res.status(400).send({
      message: "Booking customerName can not be empty"
    });
  }
  if (!req.body.customerContact || req.body.customerContact == 'undefined' || req.body.customerContact == 'null') {
    return res.status(400).send({
      message: "Booking customerContact can not be empty"
    });
  }
  if (!req.body.customerEmail || req.body.customerEmail == 'undefined' || req.body.customerEmail == 'null') {
    return res.status(400).send({
      message: "Booking customerEmail can not be empty"
    });
  }
  if (!req.body.customerNumberOfGuests || req.body.customerNumberOfGuests == 'undefined' || req.body.customerNumberOfGuests == 'null') {
    return res.status(400).send({
      message: "Booking customerNumberOfGuests can not be empty"
    });
  }
  if (!req.body.customerDateOfArrival || req.body.customerDateOfArrival == 'undefined' || req.body.customerDateOfArrival == 'null') {
    return res.status(400).send({
      message: "Booking customerDateOfArrival can not be empty"
    });
  }
}

exports.idDuplicate = (req) => {
  // Retrieve and return all bookings from the database.
  Booking.find()
    .then(bookings => {
      
    }).catch(err => {
      console.log('Something went wrong while fetching all bookings', err);
    });

}

exports.generateBookingId = () => {
  let letters = "ABCDEFGHJKMNPQRSTUXY";
  let text = "";
  for (var i = 0; i < 5; i++) {
    text += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return 'CNF-' + text;
}

