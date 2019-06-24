var mongoose = require('mongoose');
const uuidv1 = require('uuid/v1');

mongoose.Promise = Promise;

const shopData = require('../models/shop.model').shop_data;
const categoryList = require('../models/shop.model').CATEGORY_LIST;
const FoodItem = require('../models/shop.model').FoodItemSchema;
const HttpData = require('../models/httpError.model');
const Cart = require('../models/cart.model');
const ShopService = require('../services/shop.utils.service');

const connUri = process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/node-jwt';

module.exports = {

  validateCart: (req, res, next) => {
    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      const tokenData = req.decoded;
      const reqData = req.body;
      let isUserValidated = false;
      let allCartItemsValid = false;

      let result = {};
      result.cartResponse = {
        cartItems: {
          valid: [],
          invalid: []
        },
        cartStatus: {
          status: 'invalid',
          statusMsg: '',
          cartId: reqData.cartId,
          cartTotal: 0
        },
        userName: tokenData.user,
        userUUID: tokenData.uuid
      };

      validateCartItems = async (isUserValidated) => {
        try {
          if (reqData.cartItems) {
            for (let i = 0; i < reqData.cartItems.length; i++) {
              // let reqItem of reqData.cartItems
              let reqItem = reqData.cartItems[i];
              await FoodItem.findOne({ id: reqItem.id })
                .then((item) => {
                  item.quantity = reqItem.quantity; // set quantity back to cart
                  if ((item.restId == reqItem.restId) && item.enabled && item.inStock) {
                    allCartItemsValid = true;
                    result.cartResponse.cartStatus.cartTotal = result.cartResponse.cartStatus.cartTotal + (item.quantity * item.price);
                    result.cartResponse.cartItems.valid.push(item);
                  } else {
                    allCartItemsValid = false;
                    result.cartResponse.cartItems.invalid.push(item)
                  }
                })
                .catch((err) => {
                  console.log('error in find', err);
                });
            }
            if (allCartItemsValid) {
              result.cartResponse.cartStatus.status = 'valid';
              result.cartResponse.cartStatus.statusMsg = 'cart validated, all items are in stock';
            } else {
              result.cartResponse.cartStatus.status = 'invalid';
              result.cartResponse.cartStatus.statusMsg = 'some items in cart are out of stock';
            }
          }
          result.cartResponse.cartStatus.cartId = reqData.cartId;
          return result;
        } catch (error) {
          console.log('Some thing wrong went while iteration in validating cart', error);
        }
      }

      saveCartToDb = async (req, res, cartData) => {
        let query = { 'cartStatus.cartId': cartData.cartResponse.cartStatus.cartId }
        await Cart.findOneAndUpdate(query, cartData.cartResponse, { upsert: true, new: true })
          .then((data) => {
            // console.log('data', data);
          })
          .catch((error) => {
            console.log(error);
            status = 500;
            result = HttpData(status, null, err);
            res.status(status).send(result);
          })
      }

      try {
        if (reqData && (reqData.isUserLoggedIn || reqData.isUserLoggedIn === 'true')) {
          // userLoggedIn in UI
          if (tokenData && (reqData.userName && reqData.userName !== '')) {
            if ((tokenData.user == reqData.userName)) {
              // checkout cart
              isUserValidated = true;
              validateCartItems(isUserValidated)
                .then((data) => {
                  result = data;
                  data.cartResponse.userName = tokenData.user;
                  data.cartResponse.userUUID = tokenData.uuid;
                  saveCartToDb(req, res, data);
                  res.status(200).send(result)
                })
                .catch((error) => {
                  console.log(error);
                  status = 500;
                  result = HttpData(status, null, err);
                  res.status(status).send(result);
                });
            }
          }
        } else {
          // home page non user cart
          validateCartItems(isUserValidated)
            .then((data) => {
              result = data;
              saveCartToDb(req, res, data);
              res.status(200).send(result)
            })
            .catch((error) => {
              console.log(error);
              status = 500;
              result = HttpData(status, null, err);
              res.status(status).send(result);
            });
        }
      } catch (error) {
        console.log('Some thing wrong went while validating cart', error);
        status = 500;
        result = HttpData(status, null, err);
        res.status(status).send(result);
      }

    });
  }

}
