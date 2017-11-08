var express = require('express');
var router = express.Router();

/* GET test page. */
router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Testseite' });
});

module.exports = router;
