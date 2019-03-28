module.exports = (app) => {
    const booking = require('../controllers/booking.controller.js');

    // Create a new Booking
    app.post('/booking', booking.create);

    // Retrieve all booking
    app.get('/booking', booking.findAll);

    // Retrieve a single Booking with bookingId
    app.get('/booking/:bookingId', booking.findOne);

    // Update a Booking with bookingId
    app.put('/booking/:bookingId', booking.update);

    // Delete a Booking with bookingId
    app.delete('/booking/:bookingId', booking.delete);
}