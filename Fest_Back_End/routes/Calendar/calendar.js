var express = require('express');
var router = express.Router();

router.get('/userAvailability', function(req,res,next){
    req.db.getConnection(function(error, connection){
        if (error){
            console.log(error);
            res.sendStatus(500);
            return;
        }


        let query = "SELECT calendar_id AS eid, start_date AS start, end_date AS end, title, event_description AS content, class FROM calendar_availability WHERE user_id = ?;";
        connection.query(query,[11],function(error,rows,fields){
            connection.release();
            if(error){
                res.sendStatus(500);
                return;
            }
            console.log(rows);
            res.json(rows);
        });
    });
});

router.post('/saveCalendar', function(req, res, next){
    req.db.getConnection(function(error, connection){
        if (error){
            console.log(error);
            res.sendStatus(500);
            return;
        }

        let query="INSERT INTO calendar_availability (user_id, start_date, end_date, title, event_description, class) VALUES (?, ?, ?, ?, ?, ?);";
        connection.query(query,[ 11, req.body.start, req.body.end, req.body.title, req.body.content, req.body.class],function(error,rows,fields){
            connection.release();
            if(error){
                console.log(error);
                res.sendStatus(500);
                return;
            }
            res.end();
        });
    });
});

module.exports = router;