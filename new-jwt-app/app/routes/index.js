const users = require('./users.routes');
const shop = require('./shop.routes');

module.exports = (router) => {
  users(router)
  shop(router)
  return router;
};