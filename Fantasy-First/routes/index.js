var express = require('express');
var router = express.Router();
const api = require('./tbaApi')

/* GET home page. */
router.get('/', function(req, res, next) {
  // data = req.body
  res.render('index', { title: 'Fantasy First Scoring Calculator' });
});
module.exports = router;
