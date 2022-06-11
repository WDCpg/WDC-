var express = require('express');
var router = express.Router();

// router.get('/Friend', function(req, res, next) {
//     //Get all friend
//     req.db.getConnection(function(error, connection) {
//         if (error) {
//             res.sendStatus(500);
//             return;
//         }

//         let query = 'SELECT * FROM friends';

//         connection.query(query, function(error, rows, fields) {
//             connection.release();
//             if(error){
//                 res.sendStatus(500);
//                 return;
//             }
//             res.json(rows);
//         });
//     });
// })

// var path = require('path');
// var multer = require('multer');
// var storage = multer.diskStorage({
//     destination: (req,file,cb) => {
//         cb(null, '../Fest/src/assets/cover')
//     },
//     filename:(req,file,cb) => {
//         console.log(file)
//         cb(null, Date.now() + path.extname(file.originalname));
//     },
// });

// var upload = multer({storage: storage});

// router.post('/uploadCoverPhoto', upload.array('file', 12));

// router.post('/newEvent', function(req,res,next){
//     req.db.getConnection(function(error, connection){
//         if (error){
//             console.log(error);
//             res.sendStatus(500);
//             return;
//         }
//         console.log(req.files);
//             let query = "UPDATE users SET profile_picture=? WHERE user_id = ?;";
//             connection.query(query,[file.filename,], function(error, rows, fields){
//                 connection.release();
//                 if(error){
//                     res.sendStatus(500);
//                     return;
//                 }
//                 res.send("success");
//             });
//     });
// });

// router.use('/', function(req, res, next) {
//     if (req.cookies.session_id == undefined) {
//         res.status(403).send('Not Logged In');
//         return;
//     }
//     next();
// })

router.post('/newEvent', function(req, res, next) {
    req.db.getConnection(function(error, connection){
        if (error){
            console.log(error);
            res.sendStatus(500);
            return;
        }

        let query = "INSERT INTO events (event_start, event_end, event_title, event_description, country, state, city, street, post_code, icon, event_type) VALUES (?,?,?,?,?,?,?,?,?,?,?);";
        connection.query(query,[req.body.event_start, req.body.event_end, req.body.title, req.body.description, req.body.country, req.body.state, req.body.city, req.body.street, req.body.post_code, req.body.iconUnicode, req.body.privacy],function(error,rows, fields){
            
            
            if(error){
                connection.release();
                console.log(req.body)
                res.sendStatus(500);
                return;
            }

            // var eventId = 0;
            // let query = " SELECT LAST_INSERT_ID() AS event_id;";
            //     connection.query(query,function(error,rows, fields){
            //     if(error){
            //         connection.release();
            //         console.log(req.body)
            //         res.sendStatus(500);
            //         return;
            //     }
            //     eventId = rows.event_id;
            // });

            // let queryOrgniser = " INSERT INTO organiser (user_id, event_id) VALUES (?, ?);";
            //     connection.query(queryOrgniser, [req.cookies.user_id, eventId], function(error,rows, fields){
            //     connection.release();
            //     if(error){
                    
            //         console.log(req.body)
            //         res.sendStatus(500);
            //         return;
            //     }
            // });

            res.end();
        });
    });
});

// router.post('/sendNotifications', function(req, res, next) {
//     console.log('FRIENDS', req.body)
//     res.sendStatus(200)
// });

module.exports = router;