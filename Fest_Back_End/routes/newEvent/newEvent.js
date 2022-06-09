var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, '../Fest/src/assets/cover')
    },
    filename:(req,file,cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

var upload = multer({storage: storage});

var uploaded_images =[];

router.post('/UploadPicture', upload.array('file', 12));

router.post('/UploadPicture', function(req,res,next){
    req.db.getConnection(function(error, connection){
        if (error){
            console.log(error);
            res.sendStatus(500);
            return;
        }
        console.log(req.files);
        req.files.forEach(function(file){
            uploaded_images.push(file.filename);
            let query = "UPDATE users SET profile_picture=? WHERE user_id = ?;";
            connection.query(query,[file.filename, 11], function(error, rows, fields){
                connection.release();
                if(error){
                    res.sendStatus(500);
                    return;
                }
                res.send("success");
            });
        });
    });
});

module.exports = router;