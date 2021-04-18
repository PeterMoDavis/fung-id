// const form = new Formidable();

//         form.parse(req, (err, fields, files) => {

//             //https://cloudinary.com/documentation/upload_images
//             cloudinary.uploader.upload(files.upload.path, result => {

//                 console.log(result)
//                 if (result.public_id) {
//                     res.writeHead(200, { 'content-type': 'text/plain' });
//                     res.write('received upload:\n\n');
//                     res.end(util.inspect({ fields: fields, files: files }));
//                 }
//             }
//             );
//         });

    

//     // show a file upload form
//     res.writeHead(200, { 'content-type': 'text/html' });
//     res.end(`
//     <form action="/upload" enctype="multipart/form-data" method="post">
//       <input type="text" name="title" /><br/>
//       <input type="file" name="upload" multiple="multiple" /><br/>
//       <input type="submit" value="Upload" />
//     </form>
//   `);