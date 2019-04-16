const shopData = require('../models/shop.model');

module.exports = {
  getShopInventory: (req, res) => {
    res.status(200).send(shopData);
  }
}