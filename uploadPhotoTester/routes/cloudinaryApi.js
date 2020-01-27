var cloudinary = require('cloudinary').v2;
const fs = require('fs');

console.log('test');
cloudinary.config({
    cloud_name: 'pictureofbots',
    api_key: '123146783337381',
    api_secret: 'lNSZHRwJJ5vprS25VBscSUy2Fe4'

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
