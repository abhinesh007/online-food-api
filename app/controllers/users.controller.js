const bcrypt = require('bcrypt');
const uuidv1 = require('uuid/v1');

const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

const User = require('../models/users.model');
const Address = require('../models/address.model');
const HttpData = require('../models/httpError.model');

const connUri = process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/node-jwt';

module.exports = {

  add: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      let result = {};
      let status = 201;
      if (!err) {
        let userData = req.body;
        if (userData.accessLevel === undefined && userData.isAdmin === undefined) {
          userData.accessLevel = '';
          userData.isAdmin = false;
        };
        userData.uuid = uuidv1();
        const user = new User(userData); // document = instance of a model
        // TODO: We can hash the password here before we insert instead of in the model
        user.save((err, user) => {
          if (!err) {
            result = HttpData(status, 'User Created successfully');

            const payload = {
              userEmail: user.email ? user.email : '',
              user: user.name,
              isAdmin: user.isAdmin,
              accessLevel: user.accessLevel,
              uuid: user.uuid
            };
            const options = { expiresIn: '1d', issuer: 'https://online-food-api.herokuapp.com' };
            const secret = process.env.JWT_SECRET || 'addjsonwebtokensecretherelikeQuiscustodietipsoscustodes';
            const token = jwt.sign(payload, secret, options);

            result.userData = {
              userEmail: user.email ? user.email : '',
              name: user.name,
              isAdmin: user.isAdmin,
              accessLevel: user.accessLevel,
              token: token,
              uuid: user.uuid,
              _id: user._id
            };
          } else {
            status = 409;
            result = HttpData(status, 'User Already Exists', err);
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

  login: (req, res) => {
    const { name, password } = req.body;

    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      let result = {};
      let status = 200;
      if (!err) {
        User.findOne({ name }, (err, user) => {
          // console.log('user, err', user, err);
          if (!err && user) {
            // We could compare passwords in our model instead of below as well
            bcrypt.compare(password, user.password).then(match => {
              if (match) {
                try {
                  status = 200;
                  // Create a token
                  const payload = { user: user.name, isAdmin: user.isAdmin, accessLevel: user.accessLevel, uuid: user.uuid };
                  const options = { expiresIn: '1d', issuer: 'https://online-food-api.herokuapp.com' };
                  const secret = process.env.JWT_SECRET || 'addjsonwebtokensecretherelikeQuiscustodietipsoscustodes';
                  const token = jwt.sign(payload, secret, options);

                  result = HttpData(status, 'Token Created Successfully');
                  // result.token = token;
                  const userEmail = user.email ? user.email : '';
                  result.userData = {
                    userEmail: userEmail,
                    name: user.name,
                    isAdmin: user.isAdmin,
                    accessLevel: user.accessLevel,
                    token: token,
                    uuid: user.uuid
                  };
                  // req.session.loggedInUser = user.name; 
                  // console.log('req.session', req.session);
                } catch (err) {
                  console.log('Error while creating token', HttpData(500));
                }

              } else {
                status = 401;
                result = HttpData(status, 'Authentication error')
              }
              res.status(status).send(result);
            }).catch(err => {
              status = 500;
              result = HttpData(status);
              res.status(status).send(result);
            });
          } else {
            status = 404;
            result = HttpData(status);
            result.userData = null;
            res.status(status).send(result);
          }
        });
      } else {
        status = 500;
        result = HttpData(status);
        res.status(status).send(result);
      }
    });
  },

  getAll: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      let result = {};
      let status = 200;
      if (!err) {
        const payload = req.decoded;
        //  we used when we created the token
        console.log('payload', payload);
        if (payload && payload.isAdmin && payload.accessLevel === 'RW') {
          User.find({}, (err, users) => {
            if (!err) {
              result = HttpData(status);
              result.userList = users;
            } else {
              status = 500;
              result = HttpData(status, null, err);
            }
            res.status(status).send(result);
          });
        } else {
          status = 401;
          result = HttpData(status, 'Authentication Error');
          res.status(status).send(result);
        }
      } else {
        status = 500;
        result = HttpData(status, null, err);
        res.status(status).send(result);
      }
    });
  },

  deleteAdminUser: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      let result = {};
      let status = 202;
      if (!err) {
        const payload = req.decoded;
        if (payload && payload.isAdmin && payload.accessLevel === 'RW') {
          let query = { '_id': req.body._id };
          User.findOneAndDelete(query, (err, item) => {
            if (!err) {
              result = HttpData(status, 'User deleted Successfully');
              result.result = item;
            }
            else {
              status = 404;
              result = HttpData(status, "User Not Found", err);
            }
            res.status(status).send(result);
          });
        }
        else {
          status = 401;
          result = HttpData(status, 'You do not have permission to delete a user');
          res.status(status).send(result);
        }
      }
      else {
        status = 500;
        result = HttpData(status, null, err);
        res.status(status).send(result);
      }
    })
  },

  updateUserDetails: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      let result = {};
      let status = 200;
      let data = Object.assign({}, req.body)
      if (!err) {
        const payload = req.decoded;
        if (payload && payload.isAdmin && payload.accessLevel === 'RW') {
          let query = { '_id': req.body._id };
          const updatedUser = new User(data);
          delete updatedUser._doc._id;
          User.findByIdAndUpdate(query, updatedUser, { upsert: true }, (err, item) => {
            if (!err) {
              result = HttpData(status, 'User Details Updated successfully');
              result.result = item;
            } else {
              status = 404;
              result = HttpData(status, 'User Not Found', err);
            }
            res.status(status).send(result);
          })
        }
        else {
          status = 401;
          result = HttpData(status, 'You do not have permission to delete a user');
          res.status(status).send(result);
        }
      }
      else {
        status = 500;
        result = HttpData(status, null, err);
        res.status(status).send(result);
      }
    })
  }

}
