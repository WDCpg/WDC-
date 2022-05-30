var express = require('express');
var router = express.Router();

router.post('/logout', function(req, res, next) {
    // Check if user is already logged in
    if ('user' in req.session) { 
        delete req.session.user;
        res.sendStatus(200);
    }
    else {
        res.end();
    }
})

module.exports = router;