const users = require('./users.routes');
const shop = require('./shop.routes');
const cart = require('./cart.routes');

module.exports = (router) => {
  users(router)
  shop(router)
  cart(router)
  return router;
};  