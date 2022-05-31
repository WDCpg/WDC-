//MISSING:
//1.get userID from session/cookie,
//2. Fix queries based on 1)

var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest: '../assets/'});

var uploaded_images =[];

router.post('/upload', upload..array('file', 12));

router.post('/upload', function(req,res,next){
    console.log(req.files);
    req.files.forEach(function(file){
        uploaded_images.push(file.filename);
    });

    res.send();
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

router.post('/change_password', function(req,res,next){
    req.db.getConnection(functon(error, connection){
        if(error){
            console.log(error);
            res.sendStatus(500);
            return;
        }

        //password verification
        if('profile-password'in req.body && req.body.profile-password){
            let query = "INSERT INTO users (password) VALUES (?) where password = SHA2(?,224) && user_id = ?;";
            connection.quuery(query, [req.body.newPassword, req.body.userPassword, req.session.userId], function(error, rows, fields){
                connection.release();
                if(error){
                    res.sendStatus(500);
                    return;
                }
                res.end();
            });
        } else {
            res.sendStatus(401);
            return;
        }

    });
});