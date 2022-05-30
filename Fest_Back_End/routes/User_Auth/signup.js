var express = require('express');
var router = express.Router();

router.post('/signup', function(req, res, next) {
    // Check if user is already logged in
    if ('user' in req.session) {
        res.status(401).send("User already logged in");
    }

    // Check request format
    if ('email' in req.body && 'password' in req.body) {
        // Check if email has been already used
        req.db.getConnection((error, connection) => {
            if(error) {
                res.status(500).send("Database connection");
                return;
            }

            let query = 'SELECT u.email FROM users AS u WHERE u.email = (?)'

            connection.query(query, req.body.email, function(error, rows, fields) {
                connection.release();
                if(error){
                    res.status(500).send(error.sqlMessage);
                    return;
                }
                // Result from my sql to JSON 
                var result = Object.values(JSON.parse(JSON.stringify(rows)));

                if (result.length > 0) {
                    // Already exists
                    res.status(401).send("Email already used");
                    return;
                }  
                
                else {
                    // If email has not been used
                    req.db.getConnection((error, connection) => {
                        if(error) {
                            res.status(500).send("Database connection");
                            return;
                        }

                        let query = 'Call signUp(?, SHA2(?, 224));';

                        connection.query(query, [req.body.email, req.body.password], function(error, rows, fields) {
                            connection.release();
                            if(error){
                                res.status(500).send(error.sqlMessage);
                                return;
                            }

                            // Result from my sql to JSON 
                            var result = Object.values(JSON.parse(JSON.stringify(rows)));

                            // Successful created account
                            req.session.user = result[0].user_id;
                            res.sendStatus(200);
                            return;
                        })
                    })
                }
            })
        })

    } else {
        res.sendStatus(400);
        return;
    }
})

module.exports = router;