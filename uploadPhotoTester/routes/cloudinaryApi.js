var cloudinary = require('cloudinary').v2;
const fs = require('fs');

console.log('test');
cloudinary.config({
    cloud_name: 'palyscout',
    api_key: '281289447429237',
    api_secret: 'oAoGDruPGJ7Zq0KZZq7LNfqVjg4'

});
function imageFile(image) {
    fs.writeFile('image.png', image, function (err) {
        if (err) throw err;
        console.log('File is created')
    })
}
imageFile();
cloudinary.uploader.upload("image.png", function (error, result) { console.log(result, error) });
exports.imageFile = imageFile
