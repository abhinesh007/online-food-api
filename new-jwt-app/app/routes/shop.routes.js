const shopController = require('../controllers/shop.controller');
const validateToken = require('../services/user.utils.service').validateToken;

module.exports = (router) => {
  router.route('/shop')
    // .post(shopController.add)
    .get(shopController.getShopInventory) // This route is now protected
    .post(shopController.createFoodItem);
};