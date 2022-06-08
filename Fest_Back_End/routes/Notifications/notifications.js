var express = require('express');
var router = express.Router();

router.post('/getNotifications', function(req, res, next) {
    if (!'user' in req.session) {
        res.sendStatus(403);
        return;
    }

    if ('user_id' in req.body) {
        req.db.getConnection((error, connection) => {
            if(error) {
                res.status(500).send("Database connection");
                return;
            }

            let query = `SELECT * FROM notifications WHERE user_id = ${req.body.user_id};`;
            
            connection.query(query, function(error, rows, fields) {
                if(error){
                    res.status(500).send(error.sqlMessage);
                    return;
                }

                // Result from my sql to JSON
                var result = Object.values(JSON.parse(JSON.stringify(rows)));

                res.json({rows, status: 200});
                return;
            })
        })
    }
    else {
        res.sendStatus(400);
        return;
    }
});


module.exports = router;