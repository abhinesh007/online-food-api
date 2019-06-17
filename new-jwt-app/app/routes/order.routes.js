const controller = require('../controllers/order.controller');
const validateToken = require('../services/user.utils.service').validateToken;

module.exports = (router) => {
  router.route('/create/order')
    .post(validateToken, controller.createOrder)
  
    router.route('/get/order/:orderId')
    .get(controller.getSingleOrder)

    router.route('/get/userorder/:userUUID')
    .get(controller.getUserOrder)
};