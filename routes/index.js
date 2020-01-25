var express = require('express');
var router = express.Router();
const upload = require('./cloudinaryAPI')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', image:upload });
});

module.exports = router;
