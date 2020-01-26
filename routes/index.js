var express = require('express');
var router = express.Router();
const home = require('./cloudinaryAPI.js')
/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index', { title: 'Express' });
   console.log("hi")
});
router.post('/upload_image',function(req, res, next) {
  res.send('cloudinaryAPI', { file: image});
  console.log("what")
});
router.post('/uploaded_image', function(req, res, next) {
  res.send(home.upload())
  console.log("hello")
})

module.exports = router;
