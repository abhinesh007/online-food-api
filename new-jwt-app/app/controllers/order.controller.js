var mongoose = require('mongoose');

const uuid = require('uuid/v1');
const Order = require('../models/order.model');
const HttpData = require('../models/httpError.model');

// enum
const orderStatus = Object.freeze({
  OPEN:   Symbol('open'),
  CLOSED:  Symbol('closed'),
  RETURNED: Symbol('returned')
});

const connUri = process.env.MONGO_LOCAL_CONN_URL || 'mongodb://127.0.0.1:27017/node-jwt';

module.exports = {

  createOrder: (req, res) => {

    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      let result = {};
      let status = 201;
      const tokenData = req.decoded;
      console.log('tokenData', tokenData);

      let order = req.body;
      order.userUUID = tokenData.uuid;
      order.userName = tokenData.user;
      order.orderStatus = orderStatus.OPEN;
      order.orderId = uuid();

      if (!err && order) {
        Order.create(order, (err) => {
          if (!err) {
            result = HttpData(status, 'Order Created successfully');
            delete order.paymentData;
            result.orderConfirmation = order;
          } else {
            status = 409;
            result = HttpData(status, 'Order Already Exists', err);
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

  getSingleOrder: (req, res) => {

    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {

      let result = {};
      let status = 200;
      const reqOrderId = req.params.orderId;

      if (!err) {
        Order.findOne({ orderId: reqOrderId }, function (error, order) {
          if (!error) {
            console.log('order', order);
            result = HttpData(status, '');
            result.order = order;
            res.status(status).send(result);
          } else {
            status = 500;
            result = HttpData(status, null, err);
            res.status(status).send(result);
          }
        });
      } else {
        status = 500;
        result = HttpData(status, null, err);
        res.status(status).send(result);
      }
    });
  },

  getUserOrder: (req, res) => {

    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {

      let result = {};
      let status = 200;
      const reqUserUUID = req.params.userUUID;

      if (!err) {
        Order.find({ userUUID: reqUserUUID }, function (error, order) {
          if (!error) {
            console.log('order', order);
            result = HttpData(status, '');
            result.order = order;
            res.status(status).send(result);
          } else {
            status = 500;
            result = HttpData(status, null, err);
            res.status(status).send(result);
          }
        });
      } else {
        status = 500;
        result = HttpData(status, null, err);
        res.status(status).send(result);
      }
    });
  },

  getAllOrder: (req, res) => {

    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {

      let result = {};
      let status = 200;
      const tokenData = req.decoded;

      if(tokenData.isAdmin && tokenData.accessLevel == 'RW') {
        if (!err) {
          Order.find({}, function (err, order) {
            if (!err ) {
              console.log('order', order);
              result = HttpData(status, '');
              result.orders = order;
              res.status(status).send(result);
            } else {
              status = 500;
              result = HttpData(status, null, err);
              res.status(status).send(result);
            }
          });
        } else {
          status = 500;
          result = HttpData(status, null, err);
          res.status(status).send(result);
        }
      } else {
        status = 401;
        result = HttpData(status, 'Unauthorized, operation only permissable to Admin', null);
        res.status(status).send(result);
      }

    });
  }




}
