var mongoose = require('mongoose');
mongoose.Promise = Promise;

const shopData = require('../models/shop.model').shop_data;
const categoryList = require('../models/shop.model').CATEGORY_LIST;
const FoodItem = require('../models/shop.model').FoodItemSchema;
const HttpData = require('../models/httpError.model');
const ShopService = require('../services/shop.utils.service');

const connUri = process.env.MONGO_LOCAL_CONN_URL || 'mongodb://127.0.0.1:27017/node-jwt';

module.exports = {

  // tokenData - 
  // user: 'admin1',
  // isAdmin: true,
  // accessLevel: 'RW'

  // getShopInventory: (req, res) => {
  //   mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
  //     let result = {};
  //     let status = 200;
  //     if (!err) {
  //       // const payload = req.decoded;
  //       //  we used when we created the token
  //       // console.log('payload', payload);

  //       FoodItem.find({}, (err, items) => {
  //         if (!err) {
  //           result = HttpData(status);
  //           result.shopItems = items;
  //         } else {
  //           status = 500;
  //           result = HttpData(status, null, err);
  //         }
  //         res.status(status).send(result);
  //       });

  //     } else {
  //       status = 500;
  //       result = HttpData(status, null, err);
  //       res.status(status).send(result);
  //     }
  //   });
  // },

  validateCart: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      const tokenData = req.decoded;
      const reqData = req.body;
      let result = {};
      result.cartResponse = {};

      try {
        if (reqData && (reqData.isUserLoggedIn || reqData.isUserLoggedIn === 'true')) {
          // userLoggedIn in UI
          if (tokenData && (reqData.userName && reqData.userName !== '')) {
            if ((tokenData.user == reqData.userName)) {

            }
          }
        } else {

        }
      } catch (error) {
        console.log('Some thing wrong went while validating cart', error);
      }


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
  }

}