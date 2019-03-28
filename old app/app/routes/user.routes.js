
module.exports = (app) => {
    const userController = require('../controllers/user.controller.js');

    // Create a new Booking
    app.post('/user-registeration', userController.userRegistration);
    app.post('/login', userController.login);
    app.get('/logout', userController.logout);
    app.get('/profile', userController.profilePage);
}

