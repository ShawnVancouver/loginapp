var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/userModel');

router.post('/signup', passport.authenticate('local.signup', {
    session: false,
    failureRedirect: '/'
}), function (req, res, next) {
      console.log('success redirect!');
      res.redirect('../../');
});

router.post('/login', passport.authenticate('local.signin', {
    failureRedirect: '../',
    // failureFlash: true
}), function (req, res, next) {

    req.app.locals.user = req.user;
    res.redirect('/profile');
});

router.get('/logout', function (req, res, next) {
    req.logout();
    console.log('Testingg logout: ' + req.isAuthenticated());
    res.redirect('../');
});

router.post('/edit', function (req, res, next) {
        console.log('EEEEeeedit reached ' + req.body);
        res.redirect('/profile');
  });

module.exports = router;
