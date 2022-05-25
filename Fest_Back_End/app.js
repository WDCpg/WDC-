var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//mysql
var mysql = require('mysql');
//localhost 1
// var dbConnectionPool = mysql.createPool({host: 'localhost', database: 'fest_db', });

//local env 2
var dbConnectionPool = mysql.createPool({
  name: 'fest-db',
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'Roomdly1234',
  database: 'fest_db'
});



//connect to database middleware
app.use(function(req,res,next){
    req.db = dbConnectionPool;
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/*
  MIDDLEWARE:
  Allow access from localhost:3000 - Front End Vue Port
*/
app.use(function(req, res, next) {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

// Route Files
var getUserEvents = require('./routes/getUserEvents');



app.use('/', indexRouter);
app.use('/users', usersRouter);

// Custom routes
app.use('/getUserEvents', getUserEvents);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
