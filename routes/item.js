var express = require('express');
var router = express.Router();
var item = require('../controllers/itemController');
// item Routes
router.get('/', function (req, res, next) {
    console.log('item router get')
  item.list_all_items;
})
router.post('/', function (req, res, next) {
  item.create_a_item;
})

module.exports = router;
