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


/*
    MIDDLEWARE:
    Check user is logged in for private routes.
*/
router.use('/events/', function(req, res, next) {
    if (!('user' in req.session)) {
        res.sendStatus(403);
        return;
    }
    else {
        next();
    }
});

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