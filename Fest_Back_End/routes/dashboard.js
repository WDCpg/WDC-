var express = require('express');
var router = express.Router();

router.get('/getUserEvents', function(req, res, next) {

    // Get all user events
    req.db.getConnection(function(error, connection) {
        if (error) {
            res.sendStatus(500);
            return;
        }
        
        let query = 'Call GetUserEvents(?)';

        connection.query(query, req.query.user_id, function(error, rows, fields) {
            connection.release();
            if(error){
                res.sendStatus(500);
                return;
            }
            res.json(rows);
        })
    })
});

module.exports = router;