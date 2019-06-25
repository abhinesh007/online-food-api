const controller = require('../controllers/cart.controller');
const validateCartToken = require('../services/cart.utils.service').validateCartToken;

module.exports = (router) => {
  router.route('/cart')
    .post(validateCartToken, controller.validateCart)
    // .get(validateToken, controller.getAll); // This route is now protected

};