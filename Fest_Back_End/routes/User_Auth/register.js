var express = require('express');
var router = express.Router();
var path = require('path');

router.post('/register', function(req,res,next){
    // TESTING USER SESSION - REMOVE IN PRODUCTION
    req.session.user = 1;

    req.db.getConnection(function(error, connection){
        if (error){
            console.log(error);
            res.sendStatus(500);
            return;
        }

        let query = `UPDATE users SET first_name = ?, last_name = ?, dob = ?,  street = ?, city = ?, country = ?, state = ?, post_code = ? WHERE user_id = ${req.session.user};`;
        console.log(req.body);
        connection.query(query,[req.body.first_name, req.body.last_name, req.body.dob, req.body.street, req.body.city, req.body.country, req.body.state, req.body.post_code],function(error,rows, fields){
            connection.release();
            if(error){
                res.sendStatus(500);
                return;
            }
            res.end();
        });
    });
});

module.exports = router;