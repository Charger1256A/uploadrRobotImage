var express = require('express');
var router = express.Router();
const api = require('./cloudinaryApi.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/', function(req, res, next) {
  console.log("router working")
  res.send('cloudinaryApi', { image: image });
})
router.post('/imageFile', function(req, res, next) {
  api.imageFile().then(snapshot => {
    res.send(snapshot);
  })
})
exports.index = function(req, res) {
  // send moment to your ejs
  res.render('index', { exports: exports });
}


module.exports = router;