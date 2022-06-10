var express = require('express');
var router = express.Router();

router.get('/events/getUserEvents', function(req, res, next) {
    //Get all friend
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

// router.post('/createEvent', function(req,res,next){
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

router.post('/newEvent', function(req, res, next) {
    req.db.getConnection(function(error, connection){
        if (error){
            console.log(error);
            res.sendStatus(500);
            return;
        }
})

module.exports = router;