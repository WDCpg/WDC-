var express = require('express');
var router = express.Router();

router.get('/getEventAttendants', function(req, res, next) {
    if (!'user' in req.session) {
        res.sendStatus(403);
        return;
    }

    if ('event_id' in req.query) {
        req.db.getConnection((error, connection) => {
            if(error) {
                res.status(500).send("Database connection");
                return;
            }

            let eventId = req.query.event_id;
            console.log(eventId)

            let query = `SELECT att.att_id, att.event_id, att.user_id, u.first_name, u.last_name, u.profile_picture, att.user_status FROM attendance AS att LEFT JOIN users AS u ON att.user_id = u.user_id WHERE att.event_id = (?)`;

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