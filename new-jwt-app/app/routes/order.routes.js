const controller = require('../controllers/order.controller');
const validateToken = require('../services/user.utils.service').validateToken;

module.exports = (router) => {
  router.route('/create/order')
    .post(validateToken, controller.createOrder)
  
    router.route('/get/order/:orderId')
    .get(validateToken, controller.getSingleOrder)

    router.route('/delete/order/:orderId')
    .get(validateToken, controller.deleteSingleOrder)

    router.route('/get/userorder/:userUUID')
    .get(validateToken, controller.getUserOrder)
    
    router.route('/get/all/orders')
    .get(validateToken, controller.getAllOrder)
};