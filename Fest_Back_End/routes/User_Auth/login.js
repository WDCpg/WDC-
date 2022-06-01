var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next) {
    // Check if user is already logged in
    if ('user' in req.session) {
        res.status(401).send("User already logged in");
        return;
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

                let query = 'SELECT u.email FROM user_login AS ul LEFT JOIN users AS u ON ul.user_id = u.user_id  WHERE u.email = ?  AND ul.password = SHA2(?, 224);'

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
                            res.sendStatus(200);
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
            res.sendStatus(400);
            return;
        }
    }
    
    
})

module.exports = router;