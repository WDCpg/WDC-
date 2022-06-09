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

            let query = `SELECT n.notification_id, n.user_id, n.event_id, ev.event_title, ev.icon, n.type_id FROM notifications AS n LEFT JOIN events AS ev ON n.event_id = ev.event_id WHERE n.user_id =  ${req.body.user_id};`;
            
            connection.query(query, function(error, rows, fields) {
                if(error){
                    res.status(500).send(error.sqlMessage);
                    return;
                }

                // Result from my sql to JSON
                
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