//MISSING:
//1.get userID from session/cookie,
//2. Fix queries based on 1)

var express = require('express');
var router = express.Router();

router.post('/profile', function(req,res,next){
    req.db.getConnection(function(error, connection){
        if (error){
            console.log(error);
            res.sendStatus(500);
            return;
        }

        let query = "INSERT INTO users (first_name, last_name, email, contact_number, city, street, country, post_code) VALUES (?,?,?,?,?,?,?,?);";
        connection.query(query,[req.body.firstName, req.body.lastName, req.body.email, req.body.contactNumber, req.body.city, req.body.street, req.body.country, req.body.postCode],function(error,rows, fields){
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
            let query = "INSERT INTO users (password) VALUES (?) where password = ? && user_id = ?;";
            connection.quuery(query, req.body.newPassword, req.body.userPassword, req.session.userID, function(error, rows, fields){
                connection.release();
                if(error){
                    res.sendStatus(500);
                    return;
                }
                res.json(rows);
            });
        } else {
            res.sendStatus(401);
            return;
        }

    });
});