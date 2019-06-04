const shopController = require('../controllers/shop.controller');
const validateToken = require('../services/user.utils.service').validateToken;

module.exports = (router) => {
  router.route('/shop')
    // .post(shopController.add)
    .get(shopController.getShopDummy) // This route is now protected
    .post(shopController.createFoodItems);

  router.route('/shop/:data')
    .get(shopController.getShopInventory)

  router.route('/shop/data/categorywise')
    .get(shopController.getShopFormattedInventory)

  router.route('/shop/update')
    .post(shopController.updateFoodItem)

  router.route('/shop/delete')
    .post(shopController.deleteFoodItem)
};