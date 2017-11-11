console.log('users router load');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log('router users called');
    res.render('index', { title: 'users' });
  });

module.exports = router;
