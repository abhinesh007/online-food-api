const controller = require('../controllers/address.controller');
const validateToken = require('../services/user.utils.service').validateToken;

module.exports = (router) => {
  router.route('/create/address')
    .post(validateToken, controller.addAddress)
  
    router.route('/get/address/:userUUID')
    .get(controller.getAddress);
};