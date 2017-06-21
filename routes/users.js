var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require("../models/user.js");
//mongoose.Promise = global.Promise;
var passport = require('passport');
mongoose.createConnection('mongodb://localhost/passport');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get("/info", function (req, res, next) {


});

router.get('/login',
  function (req, res) {
    res.render('login');
  });

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/users/login' }),
  function (req, res) {
    res.redirect('/');
  });


router.get('/add', function (req, res, next) {
  var username = 'zulin';
  var password = "123456";
  var createTime = new Date();

  var item = new user({
    username: username,
    password: password,
    createTime: createTime
  })
  item.save(function (err, item) {
    if (err) return console.error(err);
    return res.send("ok");
  })

  //return res.send("ok");

})


module.exports = router;
