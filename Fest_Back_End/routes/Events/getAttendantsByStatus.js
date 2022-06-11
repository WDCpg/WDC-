var express = require('express');
var router = express.Router();


router.post('/getAttendantsByStatus', function(req, res, next) {
    //Get all user events
    
    if ('event_id' in req.query) {
        req.db.getConnection((error, connection) => {
            if(error) {
                res.status(500).send("Database connection");
                return;
            }

            let eventId = req.query.event_id;

            let query = `SELECT att.user_status, COUNT(att.user_id) AS number_attendants FROM attendance AS att WHERE att.event_id = (?) GROUP BY att.user_status`;

            connection.query(query, eventId, function(error, rows, fields) {
                if(error){
                    res.status(500).send(error.sqlMessage);
                    return;
                }

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