var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/sql', function(req, res, next) {
 res.render('sql', { title: 'Express' });
});

module.exports = router;
