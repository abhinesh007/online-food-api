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
      let isUserValidated = false;
      let allCartItemsValid = false;

      let result = {};
      result.cartResponse = {
        cartItems: [],
        cartStatus: {
          status: 'Invalid',
          statusMsg:''
        }
      };


      validateCartItems = async (isUserValidated) => {
        try {
          if (reqData.cartItems) {
            for (let i=0; i < reqData.cartItems.length; i++) {
              // let reqItem of reqData.cartItems
              let reqItem = reqData.cartItems[i];
              await FoodItem.findOne({ id: reqItem.id })
                .then((item) => {
                  if ((item.restId == reqItem.restId) && item.enabled && item.inStock) {
                    allCartItemsValid = true;
                    result.cartResponse.cartItems.push(item);
                  } else {
                    allCartItemsValid = false;
                  }
                })
                .catch((err) => {
                  console.log('error in find', err);
                });
            }
            if (allCartItemsValid) {
              result.cartResponse.cartStatus.status = 'Valid';
              result.cartResponse.cartStatus.statusMsg = 'Cart Validated';
            } else {
              result.cartResponse.cartStatus.status = 'Invalid';
              result.cartResponse.cartStatus = 'Some Items in Cart are Validated';
            }
          }
          return result;
        } catch (error) {
          console.log('Some thing wrong went while iteration in validating cart', error);
        }
      }

      try {
        if (reqData && (reqData.isUserLoggedIn || reqData.isUserLoggedIn === 'true')) {
          // userLoggedIn in UI
          if (tokenData && (reqData.userName && reqData.userName !== '')) {
            if ((tokenData.user == reqData.userName)) {
              // checkout cart
              isUserValidated = true;
              validateCartItems(isUserValidated);
            }
          }
        } else {
          // home page non user cart
          validateCartItems(isUserValidated);
        }
      } catch (error) {
        console.log('Some thing wrong went while validating cart', error);
      }

      let status = 200;
      if (!err) {
        validateCartItems()
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