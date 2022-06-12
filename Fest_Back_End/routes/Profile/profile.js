//MISSING:
//1.get userID from session/cookie,
//2. Fix queries based on 1)

var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, '../Fest/assets')
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
            connection.query(query,[file.filename, req.cookies.session_id], function(error, rows, fields){
                connection.release();
                if(error){
                    res.sendStatus(500);
                    return;
                }
                res.end();
            });
        });
    });
});

router.post('/updateUserData', function(req,res,next){
    req.db.getConnection(function(error, connection){
        if (error){
            console.log(error);
            res.sendStatus(500);
            return;
        }

        let query = "UPDATE users SET first_name =?, last_name = ?, email = ? , contact_number = ?, city = ?, street = ?, country = ?, post_code = ? where user_id = ?;";
        connection.query(query,[req.body.first_name, req.body.last_name, req.body.email, req.body.contact_number, req.body.city, req.body.street, req.body.country, req.body.post_code, req.cookies.session_id],function(error,rows, fields){
            connection.release();
            if(error){
                res.sendStatus(500);
                return;
            }
            res.end();
        });
    });
});

router.post('/UpdatePassword', function(req,res,next){
    req.db.getConnection(function(error, connection){
        if(error){
            console.log(error);
            res.sendStatus(500);
            return;
        }
        req.session.userId = 11;
        //password verification
        let query = "UPDATE user_login SET password = SHA2(?, 224) WHERE password = SHA2(?, 224) && user_id = ?;";
        connection.query(query,[req.body.new_password, req.body.user_password, req.cookies.session_id], function(error, rows, fields){
            connection.release();
            if(error){
                res.sendStatus(500);
                return;
            }
            res.end();
        });
    });
});



router.get('/getUserInfo', function(req,res,next){
    req.db.getConnection(function(error, connection){
        if (error){
            console.log(error);
            res.sendStatus(500);
            return;
        }

        console.log('PROFILE', req.cookies.session_id)
        let query = "SELECT * FROM users WHERE user_id = (?);";
        connection.query(query,req.cookies.session_id, function(error,rows,fields){
            connection.release();
            if(error){
                console.log(error);

                res.sendStatus(500);
                return;
            }
            console.log(rows);
            res.json(rows);
        });
    });
});

module.exports = router;