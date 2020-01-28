var cloudinary = require('cloudinary').v2;

function upload(){
    console.log('test');
    cloudinary.config({
        cloud_name: 'palyscout',
        api_key: '281289447429237',
        api_secret: 'oAoGDruPGJ7Zq0KZZq7LNfqVjg4'

    });
    cloudinary.uploader.upload('file', { tags: 'basic_sample' }, function (err, image) { 
    }    
)};
exports.upload = upload