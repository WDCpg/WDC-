var express = require('express');
var router = express.Router();

router.post('/signup', function(req, res, next) {
    // Check if user is already logged in
    if ('user' in req.session) {
        res.status(401).send("User already logged in");
    }

    else if (req.body.token != undefined) {
        console.log('BACKEND', req.body.token, req.body.profile);
        req.db.getConnection((error, connection) => {
            if(error) {
                res.status(500).send("Database connection");
                return;
            }

            
            
            let queryUser = `SELECT * FROM users AS u WHERE u.google_token = (?);`;
              
            connection.query(queryUser, req.body.token, function(errorToken, rowsToken, fieldsToken) {
                if(errorToken){
                    connection.release();
                    res.status(500).send(errorToken.sqlMessage);
                    return;
                }

                var result = Object.values(JSON.parse(JSON.stringify(rowsToken)));
                
                if (result.length > 0) {
                    // Check if password matches db
                    connection.release();
                    res.status(403).send('Account already used');
                    return;
                } 
                else {
                    let queryUser = `INSERT INTO users (first_name, last_name, email, profile_picture, google_token) VALUES (?, ?, ?, ?, ?);`;

                    connection.query(queryUser, [req.body.profile['AY'], req.body.profile['QW'], req.body.profile['Iv'], req.body['IN'], req.body.token, req.body.token], function(errorPost, rowsPost, fieldsPost) {
                        if(errorPost){
                            connection.release();
                            res.status(500).send(errorPost.sqlMessage);
                            return;
                        }

                        let userInfo = ' SELECT * FROM users AS u WHERE u.google_token = (?);'

                        connection.query(userInfo, req.body.token, function(error, rows, fields) {
                            if(error){
                                connection.release();
                                res.status(500).send(error.sqlMessage);
                                return;
                            }
                            // Result from my sql to JSON 
                            var result = Object.values(JSON.parse(JSON.stringify(rows)));

                            // Successful created account
                            req.session.user = result[0].user_id;
                            // Set cookie login 
                            res.cookie('session_id', result[0].user_id);
                            res.json({rows, status: 200});
                            return;
                        })
                        

                    })
                }
            })

        })
    }

    // Check request format
    else if ('email' in req.body && 'password' in req.body) {
        // Check if email has been already used
        req.db.getConnection((error, connection) => {
            if(error) {
                res.status(500).send("Database connection");
                return;
            }

            let query = 'SELECT u.email FROM users AS u WHERE u.email = (?)'

            connection.query(query, req.body.email, function(error, rows, fields) {
                
                if(error){
                    res.status(500).send(error.sqlMessage);
                    return;
                }
                // Result from my sql to JSON 
                var result = Object.values(JSON.parse(JSON.stringify(rows)));

                if (result.length > 0) {
                    // Already exists
                    connection.release();
                    res.status(401).send("Email already used");
                    return;
                }  
                
                else {
                    // If email has not been used
                    req.db.getConnection((error, connection) => {
                        if(error) {
                            res.status(500).send("Database connection");
                            connection.release();
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

    } 
    else {
        res.sendStatus(400);
        return;
    }
})

module.exports = router;