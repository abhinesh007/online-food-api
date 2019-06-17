const users = require('./users.routes');
const shop = require('./shop.routes');
const cart = require('./cart.routes');
const address = require('./address.routes');
const order = require('./order.routes');

module.exports = (router) => {
  users(router)
  shop(router)
  cart(router)
  address(router)
  order(router)
  return router;
};  