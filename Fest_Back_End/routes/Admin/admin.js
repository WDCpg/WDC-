var express = require('express');
var router = express.Router();


router.get('/getAllUsers', function(req,res,next){
    req.db.getConnection(function(error, connection){
        if (error){
            console.log(error);
            res.sendStatus(500);
            return;
        }


        let query = "SELECT * FROM users;";
        connection.query(query,function(error,rows,fields){
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

router.get('/getAllEvents', function(req,res,next){
    req.db.getConnection(function(error, connection){
        if (error){
            console.log(error);
            res.sendStatus(500);
            return;
        }


        let query = "SELECT ev.event_id, ev.event_title, org.user_id, u.first_name, u.last_name  FROM events AS ev LEFT JOIN organiser AS org ON ev.event_id = org.event_id LEFT JOIN users AS u ON org.user_id = u.user_id;";
        connection.query(query,function(error,rows,fields){
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

router.get('/getAllAdmins', function(req,res,next){
    req.db.getConnection(function(error, connection){
        if (error){
            console.log(error);
            res.sendStatus(500);
            return;
        }


        let query = "SELECT * FROM users WHERE is_admin = 1;";
        connection.query(query,function(error,rows,fields){
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

router.post('/adminDeleteEvent', function(req,res,next){
    console.log("YOYYOYO", req.body.user);
    req.db.getConnection(function(error, connection){
        if (error){
            console.log(error);
            res.sendStatus(500);
            return;
        }
        let query = "DELETE FROM events WHERE event_id = ?;";
        connection.query(query,req.body.user,function(error,rows, fields){
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

router.post('/adminDeleteUser', function(req,res,next){
    console.log(req.body);
    req.db.getConnection(function(error, connection){
        if (error){
            console.log(error);
            res.sendStatus(500);
            return;
        }

        let query = "DELETE FROM users WHERE user_id = ?;";
        connection.query(query,req.body.user_id,function(error,rows, fields){
            connection.release();
            if(error){
                res.sendStatus(500);
                return;
            }
            res.end();
        });
    });
});

router.post('/adminDeleteAdmin', function(req,res,next){
    req.db.getConnection(function(error, connection){
        if (error){
            console.log(error);
            res.sendStatus(500);
            return;
        }

        let query = "UPDATE users SET is_admin = 0 WHERE user_id = ?;";
        connection.query(query,req.body.user_id,function(error,rows, fields){
            connection.release();
            if(error){
                res.sendStatus(500);
                return;
            }
            res.end();
        });
    });
});

router.post('/adminUpdateUserData', function(req,res,next){
    req.db.getConnection(function(error, connection){
        if (error){
            console.log(error);
            res.sendStatus(500);
            return;
        }

        let query = "UPDATE users SET first_name =?, last_name = ?, email = ? , contact_number = ?, city = ?, street = ?, country = ?, post_code = ?, is_admin = ? where user_id = ?;";
        connection.query(query,[req.body.first_name, req.body.last_name, req.body.email, req.body.contact_number, req.body.city, req.body.street, req.body.country, req.body.post_code, req.body.is_admin, req.body.user_id],function(error,rows, fields){
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


router.get('/getSiteStatistics', function(req,res,next){
    req.db.getConnection(function(error, connection){
        if (error){
            console.log(error);
            res.sendStatus(500);
            return;
        }


        let query = "SELECT (SELECT COUNT(*) from users) as users, (SELECT COUNT(*) from events) as events, (SELECT COUNT(*) FROM users WHERE is_admin=true) AS admin;";
        connection.query(query,function(error,rows,fields){
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




module.exports = router;