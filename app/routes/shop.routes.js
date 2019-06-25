const shopController = require('../controllers/shop.controller');
const validateToken = require('../services/user.utils.service').validateToken;

module.exports = (router) => {
  router.route('/shop')
    .get(shopController.getShopDummy)
    .post(shopController.createFoodItems);

  router.route('/shop/items')
    .get(shopController.getShopInventory)

  router.route('/shop/items/categorywise')
    .get(shopController.getShopFormattedInventory)

  router.route('/shop/update')
    .post(validateToken, shopController.updateFoodItem)

  router.route('/shop/delete')
    .post(validateToken, shopController.deleteFoodItem)
};