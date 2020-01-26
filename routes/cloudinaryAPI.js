var cloudinary = require('cloudinary').v2;

function upload(){
    console.log('test');
    cloudinary.config({
        cloud_name: 'pictureofbots',
        api_key: '123146783337381',
        api_secret: 'lNSZHRwJJ5vprS25VBscSUy2Fe4'

    });
    cloudinary.uploader.upload('file', { tags: 'basic_sample' }, function (err, image) { 
    }    
)};
exports.upload = upload