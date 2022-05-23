var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.get('/profile', function(req,res,next){
    req.db.getConection(function(error,connection){

    });
})