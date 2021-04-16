

const cloudinary = require('../../config/cloudinary');

try {
    let result = cloudinary.uploader.upload('./public/assets/images/IMG_5062.jpg',{type: "upload", image_metadata:true}, 
function(error,result) {
    //   console.log("result", result);
      if (result) {
        console.log('url: ' + result.url);
        console.log('secure_url:' + result.secure_url);
        console.log('date created: ' + result.image_metadata.DateCreated);
        console.log('latitude: ' + result.image_metadata.GPSLatitude);
        console.log('longitude: ' + result.image_metadata.GPSLongitude);
      }
    });
  } catch (err) {
    console.log(err);
  }



