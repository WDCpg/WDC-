var express = require('express');
var router = express.Router();


router.post('/login', function(req, res, next) {
    console.log('BACKEND LOGIN', req.body)

    // Check if user is already logged in
    console.log('Login Check', req.cookies.session_id)
    if (req.cookies.session_id != undefined) {
        req.db.getConnection((error, connection) => {
            if(error) {
                res.status(500).send("Database connection");
                return;
            }
            
            let queryUser = `SELECT * FROM users AS u WHERE u.user_id = ${req.cookies.session_id};`;

            connection.query(queryUser, function(error, rows, fields) {
                connection.release();
                if(error){
                    res.status(500).send(error.sqlMessage);
                    return;
                }

                res.json({rows, status: 200});
                return;
            })
        })
    }


    else if ('token' in req.body) {
        req.db.getConnection((error, connection) => {
            if(error) {
                res.status(500).send("Database connection");
                return;
            }
            
            let queryUser = `SELECT * FROM users AS u WHERE u.email= (?);`;

            connection.query(queryUser, req.body.profile['Iv'], function(error, rows, fields) {
                
                if(error){
                    res.status(500).send(error.sqlMessage);
                    return;
                }

                var result = Object.values(JSON.parse(JSON.stringify(rows)));

                if (result.length > 0) {
                    // Check if password matches db
                    if (result.length == 1) {
                        // Set cookie login 
                        res.cookie('session_id', result[0].user_id);
                        res.json({rows, status: 200});
                        return;
                        
                    } else {
                        res.status(401).send('Wrong password');
                        return;
                    }

                } else {
                    connection.release();
                    // User not registered
                    res.status(403).send('Unknown user')
                    return;
                }

                
            })
        })
    }

    else {
        // Check request format
        if ('email' in req.body && 'password' in req.body) {
            // Get password of user
            req.db.getConnection((error, connection) => {
                if(error) {
                    res.status(500).send("Database connection");
                    return;
                }

                let query = 'SELECT u.user_id FROM user_login AS ul LEFT JOIN users AS u ON ul.user_id = u.user_id  WHERE u.email = ?  AND ul.password = SHA2(?, 224);'
               
                connection.query(query, [req.body.email, req.body.password],  function(error, rows, fields) {
                    if(error){
                        res.status(500).send(error.sqlMessage);
                        return;
                    }

                    // Result from my sql to JSON
                    var result = Object.values(JSON.parse(JSON.stringify(rows)));

                    
                    
                    // Check if user id is on db
                    if (result.length > 0) {
                        // Check if password matches db
                        if (result.length == 1) {
                            
                            req.session.user = result[0].user_id;

                            let queryUser = `SELECT * FROM users AS u WHERE u.user_id = (?);`;

                            connection.query(queryUser, result[0].user_id, function(error, rows, fields) {
                                if(error){
                                    res.status(500).send(error.sqlMessage);
                                    return;
                                }

                                // Set cookie login 
                                res.cookie('session_id', result[0].user_id);
                                res.json({rows, status: 200});
                                return;

                            })

                            
                        } else {
                            res.status(401).send('Wrong password');
                            return;
                        }

                    } else {
                        connection.release();
                        // User not registered
                        res.status(403).send('Unknown user')
                        return;
                    }
                })
            })

        }
        else {
            res.sendStatus(403);
            return;
        }
    }


})

module.exports = router;
