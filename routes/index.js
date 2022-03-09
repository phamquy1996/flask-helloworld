var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Docker NodeJS Pro 9x 123', name: 'James' });
});

module.exports = router;
