var express = require('express');
var router = express.Router();


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

router.post('/newEvent', function(req, res, next) {
    req.db.getConnection(function(error, connection){
        if (error){
            console.log(error);
            res.sendStatus(500);
            return;
        }

        let query = "INSERT INTO events (event_start, event_end, event_title, event_description, country, state, city, street, post_code, icon, event_type) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
        connection.query(query,[req.body.event_start, req.body.event_end, req.body.event_title, req.body.event_description, req.body.country, req.body.state, req.body.city, req.body.street, req.body.post_code, req.body.icon, req.body.event_type],function(error,rows, fields){
            connection.release();
            if(error){
                res.sendStatus(500);
                return;
            }
            res.end();
        });
    });
})

module.exports = router;