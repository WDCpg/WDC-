//MISSING:
//1.get userID from session/cookie,
//2. Fix queries based on 1)

var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, '../assets')
    },
    filename:(req,file,cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

var upload = multer({storage: storage});

var uploaded_images =[];

router.post('/uploadInfo', upload.array('file', 12));

router.post('/uploadInfo', function(req,res,next){
    console.log(req.files);
    req.files.forEach(function(file){
        uploaded_images.push(file.filename);
    });

    res.send("success");
});

router.post('/profile', function(req,res,next){
    req.db.getConnection(function(error, connection){
        if (error){
            console.log(error);
            res.sendStatus(500);
            return;
        }

        let query = "INSERT INTO users (first_name, last_name, email, contact_number, city, street, country, post_code) VALUES (?,?,?,?,?,?,?,?) WHERE user_id = ?;";
        connection.query(query,[req.body.first_name, req.body.last_name, req.body.contact_number, req.body.email, req.body.city, req.body.street, req.body.country, req.body.post_code, req.session.userId],function(error,rows, fields){
            connection.release();
            if(error){
                res.sendStatus(500);
                return;
            }
            res.end();
        });
    });
});

// router.post('/change_password', function(req,res,next){
//     req.db.getConnection(functon(error, connection){
//         if(error){
//             console.log(error);
//             res.sendStatus(500);
//             return;
//         }

//         //password verification
//         if('profile-password'in req.body && req.body.profile-password){
//             let query = "INSERT INTO users (password) VALUES (?) where password = SHA2(?,224) && user_id = ?;";
//             connection.query(query, [req.body.newPassword, req.body.userPassword, req.session.userId], function(error, rows, fields){
//                 connection.release();
//                 if(error){
//                     res.sendStatus(500);
//                     return;
//                 } else {
//                 res.sendStatus(401);
//                 return;
//                 }
//                 res.end();
//             });
//         });
//     });
// });

module.exports = router;