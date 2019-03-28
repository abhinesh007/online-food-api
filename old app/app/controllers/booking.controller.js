const Booking = require('../models/booking.model.js');
const BookingUtilService = require('../services/booking.util.service.js');


// Create and Save a new Booking
exports.create = (req, res) => {
    // Validate request
    BookingUtilService.validateCreateUpdateReq(req);

    // Create a Booking
    const booking = new Booking({
        customerName: req.body.customerName,
        customerContact: req.body.customerContact,
        customerEmail: req.body.customerEmail,
        customerNumberOfGuests: req.body.customerNumberOfGuests,
        customerDateOfArrival: req.body.customerDateOfArrival,
        customerAdditionalInfo: req.body.customerAdditionalInfo,
        customerBookingId: BookingUtilService.generateBookingId()
    });

    // Save Booking in the database
    booking.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Booking."
            });
        });
};

// Retrieve and return all bookings from the database.
exports.findAll = (req, res) => {
    Booking.find()
        .then(bookings => {
            res.send(bookings);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving bookings."
            });
        });
};

// Find a single booking with a bookingId
exports.findOne = (req, res) => {
    Booking.findOne({ customerBookingId: req.params.bookingId })
        .then(booking => {
            if (!booking) {
                return res.status(404).send({
                    message: "Booking not found with id " + req.params.bookingId
                });
            }
            res.send(booking);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Booking not found with id " + req.params.bookingId
                });
            }
            return res.status(500).send({
                message: "Error retrieving booking with id " + req.params.bookingId
            });
        });
};

// Update a booking identified by the bookingId in the request
exports.update = (req, res) => {
    // Validate Request
    BookingUtilService.validateCreateUpdateReq(req);
    // Find booking and update it with the request body
    Booking.findOneAndUpdate({ customerBookingId: req.params.bookingId }, {
        customerName: req.body.customerName,
        customerContact: req.body.customerContact,
        customerEmail: req.body.customerEmail,
        customerNumberOfGuests: req.body.customerNumberOfGuests,
        customerDateOfArrival: req.body.customerDateOfArrival,
        customerAdditionalInfo: req.body.customerAdditionalInfo
    }, { new: true })
        .then(booking => {
            if (!booking) {
                return res.status(404).send({
                    message: "Booking not found with id " + req.params.bookingId
                });
            }
            res.send(booking);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Booking not found with id " + req.params.bookingId
                });
            }
            return res.status(500).send({
                message: "Error updating booking with id " + req.params.bookingId
            });
        });
};

// Delete a booking with the specified bookingId in the request
exports.delete = (req, res) => {
    Booking.findOneAndRemove({ customerBookingId: req.params.bookingId })
        .then(booking => {
            if (!booking) {
                return res.status(404).send({
                    message: "Booking not found with id " + req.params.bookingId
                });
            }
            res.send({ message: "Booking deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Booking not found with id " + req.params.bookingId
                });
            }
            return res.status(500).send({
                message: "Could not delete booking with id " + req.params.bookingId
            });
        });
};
