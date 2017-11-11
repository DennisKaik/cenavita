console.log('router index load')
var express = require('express');
var router = express.Router();
var item = require('../controllers/itemController');

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('router index called');
  res.render('index', { title: 'Express' });
});

module.exports = router;
