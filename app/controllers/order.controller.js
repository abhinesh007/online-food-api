var mongoose = require('mongoose');

const uuid = require('uuid/v1');
const Order = require('../models/order.model');
const HttpData = require('../models/httpError.model');

// enum
const orderStatus = Object.freeze({
  PENDING: 'pending',
  PREPARING: 'preparing',
  ON_THE_WAY: 'oneTheWay',
  DELIVERED: 'delivered',
  RETURNED: 'returned'
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
      order.orderStatus = orderStatus.PENDING;
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
        Order.findOne({ orderId: reqOrderId }, function (err, order) {
          if (!err) {
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
        Order.find({ userUUID: reqUserUUID }, function (err, order) {
          if (!err) {
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

      if (tokenData.isAdmin && tokenData.accessLevel == 'RW') {
        if (!err) {
          Order.find({}, function (err, order) {
            if (!err) {
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
  },

  deleteSingleOrder: (req, res) => {

    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {

      let result = {};
      let status = 200;
      const tokenData = req.decoded;
      const reqOrderId = req.params.orderId;

      if (tokenData.isAdmin && tokenData.accessLevel == 'RW') {
        if (!err) {
          Order.findOneAndDelete({ orderId: reqOrderId }, function (err, order) {
            if (!err) {
              Order.find({}, function (err, orders) {
                if (!err) {
                  result = HttpData(status, '');
                  result.orders = orders;
                  res.status(status).send(result);
                } else {
                  status = 500;
                  result = HttpData(status, null, err);
                  res.status(status).send(result);
                }
              })
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
  },

  updateSingleOrder: (req, res) => {

    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {

      let result = {};
      let status = 200;
      const tokenData = req.decoded;
      let reqOrderId;        
      if(req.body.orderStatus || req.body.orderId) {
        reqOrderId = req.body.orderId;
      }

      if (tokenData.isAdmin && tokenData.accessLevel == 'RW') {
        if (!err) {
          let query = { 'orderId': reqOrderId }
          Order.findOneAndUpdate(query, req.body, { upsert: true }, function (err, order) {
            if (!err) {
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
      } else {
        status = 401;
        result = HttpData(status, 'Unauthorized, operation only permissable to Admin', null);
        res.status(status).send(result);
      }

    });
  }




}
