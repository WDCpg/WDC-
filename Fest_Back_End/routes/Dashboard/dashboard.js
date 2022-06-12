var express = require('express');
var router = express.Router();

/*
    Public Routes:
    Not logged in.
*/
router.get('/events/getPublicEvents', function(req, res, next) {
    //Get all user events
    req.db.getConnection(function(error, connection) {
        if (error) {
            res.sendStatus(500);
            return;
        }

        let query = 'SELECT * FROM events';

        connection.query(query, function(error, rows, fields) {
            connection.release();
            if(error){
                res.sendStatus(500);
                return;
            }
            res.json(rows);
        })
    })
});

router.post('/getNotifications', function(req, res, next) {
    console.log("API NOTIFICATIONS", req.cookies)
    if (req.cookies.session_id != undefined) {
        if ('user_id' in req.body || req.cookies.session_id) {
        
            req.db.getConnection((error, connection) => {
                if(error) {
                    res.status(500).send("Database connection");
                    return;
                }
    
                let query = `SELECT n.notification_id, n.user_id, n.event_id, ev.event_title, ev.icon, n.type_id FROM notifications AS n LEFT JOIN events AS ev ON n.event_id = ev.event_id WHERE n.user_id =  (?);`;
                
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
        }
        else {
            res.sendStatus(400);
            return;
        }
    }
    else {
        res.sendStatus(403);
        return;
    }

    
});

router.get('/getEventDetails', function(req, res, next) {
    req.db.getConnection((error, connection) => {
        if(error) {
            res.status(500).send("Database connection");
            return;
        }

        let eventId = req.query.event_id;

        let query = `SELECT * FROM events AS ev WHERE ev.event_id = (?)`;

        connection.query(query, eventId, function(error, rows, fields) {
            if(error){
                res.status(500).send(error.sqlMessage);
                return;
            }

            res.json({rows, status: 200});
            return;
        })

    })
});

router.get('/getEventAttendants', function(req, res, next) {
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
    
    
});


/*
    MIDDLEWARE:
    Check user is logged in for private routes.
*/

// router.use('/events/', function(req, res, next) {
    
//     // if (req.cookies.session_id === undefined) {
//     //     res.sendStatus(403);
//     //     return;
//     // }
//     // else {
//     //     next();
//     // }
//   });

/*
    Private Routes:
    User must be logged in to access these routes.
*/


router.get('/events/getUserEvents', function(req, res, next) {
    //Get all user events
    req.db.getConnection(function(error, connection) {
        if (error) {
            res.sendStatus(500);
            return;
        }

        let query = 'SELECT * FROM events';

        connection.query(query, function(error, rows, fields) {
            connection.release();
            if(error){
                res.sendStatus(500);
                return;
            }
            res.json(rows);
        });
    });
})
module.exports = router;