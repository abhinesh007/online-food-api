var mongoose = require('mongoose');
mongoose.Promise = Promise;

const shopData = require('../models/shop.model').shop_data;
const categoryList = require('../models/shop.model').CATEGORY_LIST;
const FoodItem = require('../models/shop.model').FoodItemSchema;
const HttpData = require('../models/httpError.model');
const ShopService = require('../services/shop.utils.service');

const connUri = process.env.MONGO_LOCAL_CONN_URL || 'mongodb://127.0.0.1:27017/node-jwt';

module.exports = {

  getShopDummy: (req, res) => {
    res.status(200).send(shopData);
  },

  getShopInventory: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      let result = {};
      let status = 200;
      if (!err) {
        // const payload = req.decoded;
        //  we used when we created the token
        // console.log('payload', payload);

        FoodItem.find({}, (err, items) => {
          if (!err) {
            result = HttpData(status);
            result.shopItems = items;
          } else {
            status = 500;
            result = HttpData(status, null, err);
          }
          res.status(status).send(result);
        });

      } else {
        status = 500;
        result = HttpData(status, null, err);
        res.status(status).send(result);
      }
    });
  },

  getShopFormattedInventory: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      let result = {};
      result.shopFormattedData = {};

      formatDataCategorywise = async () => {
        for (let i = 0; i < categoryList.length; i++) {
          if (categoryList[i].category === 'Recommended') {

            await FoodItem.find({ recommended: true })
              .then((items) => {
                result.shopFormattedData.Recommended = {};
                result.shopFormattedData.Recommended.items = items;
              })
              .catch((err) => {
                console.log('error in find', err);
              });
          } else {

            await FoodItem.find({ category: categoryList[i].category })
              .then((items) => {
                result.shopFormattedData[categoryList[i].category] = { 'items': items }
              })
              .catch((err) => {
                console.log('error in find', err);
              });

            if (categoryList[i].subCat) {
              for (let j = 0; j < categoryList[i].subCat.length; j++) {
                await FoodItem.find({ category: categoryList[i].category, subCategory: categoryList[i].subCat[j] })
                  .then((items) => {
                    if (!result.shopFormattedData[categoryList[i].category]) {
                      result.shopFormattedData[categoryList[i].category] = {};
                    }
                    result.shopFormattedData[categoryList[i].category][categoryList[i].subCat[j]] = items;
                  })
                  .catch((err) => {
                    console.log('error in find', err);
                  });
              }
            }
          }
        }

        return result;
      }

      let status = 200;
      if (!err) {
        formatDataCategorywise()
          .then((data) => {
            result = data;
            res.status(status).send(result)
          })
          .catch((error) => {
            console.log(error);
            status = 500;
            result = HttpData(status, null, err);
            res.status(status).send(result);
          });
      } else {
        status = 500;
        result = HttpData(status, null, err);
        res.status(status).send(result);
      }
    });
  },

  createFoodItem: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      let result = {};
      let status = 201;
      if (!err) {
        const { category, cloudinaryImageId, description, displayOrder, enabled, id, isPopular, inStock, itemDiscount, isVeg, name, price, recommended, restId } = req.body;
        const Item = new FoodItem({ category, cloudinaryImageId, description, displayOrder, enabled, id, isPopular, inStock, itemDiscount, isVeg, name, price, recommended, restId });
        // Item.restId = ShopService.generateRestId();
        Item.save((err, item) => {
          if (!err) {
            result = HttpData(status, 'Item Created successfully');
            result.result = item;
          } else {
            status = 409;
            result = HttpData(status, 'Item Already Exists', err);
          }
          res.status(status).send(result);
        });
      } else {
        status = 500;
        result = HttpData(status, null, err);
        res.status(status).send(result);
      }
    });
  },

  updateFoodItem: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      let result = {};
      let data = Object.assign({}, req.body);
      let status = 200;
      if (!err) {
        let query = { 'id': req.body.id }
        //const { category, cloudinaryImageId, description, displayOrder, enabled, id, isPopular, inStock, itemDiscount, isVeg, name, price, recommended, restId } = req.body;
        // const Item = new FoodItem({ category, cloudinaryImageId, description, displayOrder, enabled, id, isPopular, inStock, itemDiscount, isVeg, name, price, recommended, restId });
        const Item = new FoodItem(data);
        delete Item._doc._id;

        FoodItem.findOneAndUpdate(query, Item, { upsert: true }, (err, item) => {
          if (!err) {
            result = HttpData(status, 'Item Updated successfully');
            result.result = item;
          } else {
            status = 404;
            result = HttpData(status, 'Item Not Found', err);
          }
          res.status(status).send(result);
        });
      } else {
        status = 500;
        result = HttpData(status, null, err);
        res.status(status).send(result);
      }
    });
  },

  deleteFoodItem: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      let result = {};
      let query = { 'id': req.body.id }
      let status = 202;
      if (!err) {
        // const Item = new FoodItem(data);
        // delete Item._doc._id;

        FoodItem.findOneAndDelete(query, (err, item) => {
          if (!err) {
            result = HttpData(status, 'Item Deleted successfully');
            result.result = item;
          } else {
            status = 404;
            result = HttpData(status, 'Item Not Found', err);
          }
          res.status(status).send(result);
        });
      } else {
        status = 500;
        result = HttpData(status, null, err);
        res.status(status).send(result);
      }
    });
  },

  createFoodItems: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      let result = {};
      let status = 201;
      let itemsData = req.body;

      if (!err && itemsData) {
        FoodItem.insertMany(itemsData, (err) => {
          if (!err) {
            result = HttpData(status, 'Item Created successfully');
            result.result = itemsData;
          } else {
            status = 409;
            result = HttpData(status, 'Item Already Exists', err);
          }
          res.status(status).send(result);
        });
      } else {
        status = 500;
        result = HttpData(status, null, err);
        res.status(status).send(result);
      }

    });
  }

}