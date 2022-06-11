var express = require('express');
var router = express.Router();

// router.get('/getEventDetails', function(req, res, next) {
//     res.sendStatus(200)
//     // req.db.getConnection((error, connection) => {
//     //     if(error) {
//     //         res.status(500).send("Database connection");
//     //         return;
//     //     }

//     //     let eventId = req.query.event_id;

//     //     let query = `SELECT * FROM events AS ev WHERE ev.event_id = (?)`;

//     //     connection.query(query, eventId, function(error, rows, fields) {
//     //         if(error){
//     //             res.status(500).send(error.sqlMessage);
//     //             return;
//     //         }

//     //         res.json({rows, status: 200});
//     //         return;
//     //     })

//     // })
// });

module.exports = router;