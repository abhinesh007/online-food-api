var User = require('../models/user.model.js');

exports.userRegistration = (req, res) => {
  // confirm that user typed same password twice
  if (req.body.password !== req.body.passwordConf) {
    var err = new Error('Passwords do not match.');
    return res.status(404).send({
      message: 'passwords dont match ' + err
    });
  }

  if (req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf) {

    var userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      passwordConf: req.body.passwordConf,
    }

    User.create(userData, function (error, user) {
      if (error) {
        return res.status(404).send({
          message: 'something went wrong while creating user ' + err
        });
      } else {
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });

  } else if (req.body.logemail && req.body.logpassword) {
    User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return res.status(401).send({
          message: 'Wrong email or password ' + err
        });
      } else {
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return res.status(400).send({
      message: 'All fields required.' + err
    });
  }
}

exports.login = (req, res) => {
  User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
    if (error || !user) {
      var err = new Error('Wrong email or password.');
      err.status = 401;
      return res.status(401).send({
        message: 'Wrong email or password ' + err
      });
    } else {
      req.session.userId = user._id;
      return res.redirect('/profile');
    }
  });
}

exports.profilePage = (req, res) => {
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return res.status(400).send({
          message: 'something went wrong' + err
        });
      } else {
        if (user === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return res.status(400).send({
            message: 'Not authorized! Go back!' + err
          });;
        } else {
          return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + "<br><a type='button' href='/logout'>Logout</a>")
        }
      }
    });

}

exports.logout = (req, res) => {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return res.status(400).send({
          message: 'something went wrong' + err
        });
      } else {
        return res.redirect('/');
      }
    });
  }
}

