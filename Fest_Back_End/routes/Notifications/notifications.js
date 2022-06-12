var express = require('express');
var router = express.Router();



router.post('/sendNotifications', function(req, res, next) {
    if (req.cookies.session_id != undefined) {
        req.db.getConnection((error, connection) => {
            if(error) {
                res.status(500).send("Database connection");
                return;
            }

            let query = `SELECT * FROM INSERT INTO notifications (user_id, event_id)`;
            
            connection.query(query, req.cookies.session_id, function(error, rows, fields) {
                if(error){
                    res.status(500).send(error.sqlMessage);
                    return;
                }

                // Result from my sql to JSON
                
                res.json({rows, status: 200});
                return;
            })
        })
        return;
    }

    else  {
        res.sendStatus(403);
        return;
        
    }
 
});

module.exports = router;