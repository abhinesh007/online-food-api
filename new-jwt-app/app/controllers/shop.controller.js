var mongoose = require('mongoose');

const shopData = require('../models/shop.model').shop_data;
const FoodItem = require('../models/shop.model').FoodItemSchema;
const HttpData = require('../models/httpError.model');

const connUri = process.env.MONGO_LOCAL_CONN_URL || 'mongodb://127.0.0.1:27017/node-jwt';

module.exports = {
  getShopInventory: (req, res) => {
    res.status(200).send(shopData);
  },

  createFoodItem: (req, res, next) => {
      let result = {};
      let status = 200; let err;
        const { category, cloudinaryImageId, description, displayOrder, enabled, id, isPopular, inStock, itemDiscount, isVeg, name, price, recommended, restId } = req.body;
        const item = new FoodItem({ category, cloudinaryImageId, description, displayOrder, enabled, id, isPopular, inStock, itemDiscount, isVeg, name, price, recommended, restId }); // document = instance of a model
        // TODO: We can hash the password here before we insert instead of in the model
        try {
          item.save((err, item) => {
            if (!err) {
              result = HttpData(status, 'Item Created successfully');
              result.result = item;
            } else {
              status = 409;
              result = HttpData(status, 'Item Already Exists', err);
            }
            res.status(status).send(result);
          });
        } catch (err) {
          console.log(err);
        }

     

  }

}