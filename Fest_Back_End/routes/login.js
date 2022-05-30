var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next) {
    // Check if user is already logged in
    if ('user' in req.session) {
        res.status(401).send("User already logged in");
    }

    // Check request format
    if ('user_id' in req.body && 'password' in req.body) {
        // Get password of user
        req.db.getConnection((error, connection) => {
            if(error) {
                res.status(500).send("Database connection");
                return;
            }

            let query = 'SELECT * FROM user_login AS ul WHERE ul.user_id = (?)'

            connection.query(query, req.body.user_id,  function(error, rows, fields) {
                if(error){
                    res.status(500).send(error.sqlMessage);
                    return;
                }

                // Result from my sql to JSON 
                var result = Object.values(JSON.parse(JSON.stringify(rows)));
                
                // Check if user id is on db
                if (result.length > 0) {
                    // Check if password matches db
                    let query = 'SELECT * FROM user_login AS ul WHERE ul.user_id = ?  AND ul.password = SHA2(?, 224);'

                    connection.query(query, [req.body.user_id, req.body.password],  function(error, rows, fields) {
                        connection.release();
                        if(error){
                            res.status(500).send(error.sqlMessage);
                            return;
                        }
                        if (result.length == 1) {
                            req.session.user = result[0].user_id;
                            res.sendStatus(200);
                            return;
    
                        } else {
                            res.status(401).send('Wrong password');
                            return;
                        }

                    })

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
        res.sendStatus(400);
        return;
    }
    
})

module.exports = router;