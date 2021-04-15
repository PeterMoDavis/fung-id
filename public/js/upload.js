const cloudinary = require('../../config/cloudinary');

cloudinary.uploader.upload('./public/assets/images/IMG_5062.jpg', function(error, result) {console.log(result, error)});








