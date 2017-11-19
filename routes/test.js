var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('router test called');
  res.json({ message: 'hooray! welcome to our api!' });
  //res.render('test', { title: 'Express' });
});

module.exports = router;
