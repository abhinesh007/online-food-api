const jwt = require('jsonwebtoken');
const result = {};
result.cartResponse = {
  cartItems: [],
  cartStatus: {
    status: 'Invalid',
    statusMsg: '',
    tokenValidationMsg:''
  }
};

module.exports = {
  validateCartToken: (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null; // Bearer <token>

    if (req.headers.authorization.includes('no user data available')) {
      result.cartResponse.cartStatus.tokenValidationMsg = 'Initialising null user cart as no user data available';
      req.result = result;
      next();
    } else {
      if (authorizationHeader && token) {
        const options = {
          expiresIn: '2d',
          issuer: 'https://test.com'
        };
        try {
          // verify makes sure that the token hasn't expired and has been issued by us
          let secretKey = process.env.JWT_SECRET || 'addjsonwebtokensecretherelikeQuiscustodietipsoscustodes';
          let tokenDecoded = jwt.verify(token, secretKey, options);

          // Let's pass back the decoded token to the request object
          req.decoded = tokenDecoded;
          // We call next to pass execution to the subsequent middleware
          next();
        } catch (err) {
          // Throw an error just in case anything goes wrong with verification
          throw new Error(err);
        }
      } else {
        result = {
          error: `Authentication error. Token required.`,
          status: 401
        };
        res.status(401).send(result);
      }
    }
  }
};