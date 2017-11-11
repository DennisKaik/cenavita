console.log('router index load')
var express = require('express');
var router = express.Router();
var item = require('../controllers/itemController');

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('router index called');
  res.render('index', { title: 'Express' });
});
router.get('/item', function (req, res, next) {
  console.log('item router get')
  item.list_all_items
})
router.post('/item', function (req, res, next) {
item.create_a_item
})
module.exports = router;
