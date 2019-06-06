const controller = require('../controllers/cart.controller');
const validateToken = require('../services/user.utils.service').validateToken;

module.exports = (router) => {
  router.route('/cart')
    .post(controller.validateCart)
    // .get(validateToken, controller.getAll); // This route is now protected

//   router.route('/address')
//     .post(validateToken, controller.addAddress)
//     .get(validateToken, controller.getAll);

//   router.route('/login')
//     .post(controller.login);
};