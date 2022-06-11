var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');
var cors = require('cors');

// Route Files
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dashboardRouter = require('./routes/Dashboard/dashboard');
var loginRouter = require('./routes/User_Auth/login');
var signUpRouter = require('./routes/User_Auth/signup');
var logOutRouter = require('./routes/User_Auth/logout');
var profileRouter = require('./routes/Profile/profile');
var newEvent = require('./routes/newEvent/newEvent');
var calendarRouter = require('./routes/Calendar/calendar');
var notificationsRouter = require('./routes/Notifications/notifications');
var eventAttendantsRouter = require('./routes/Events/getEventAttendants');
var eventDetailsRouter = require('./routes/Events/getEventDetails');
var eventAttendantsByStatusRouter = require('./routes/Events/getAttendantsByStatus');


var app = express();

//mysql
var mysql = require('mysql');
const router = require('./routes/index');
//localhost 1
//var dbConnectionPool = mysql.createPool({host: '127.0.0.1', database: 'fest_db' });

// local env 2
// var dbConnectionPool = mysql.createPool({
//   name: 'fest-db',
//   host: 'localhost',
//   port: '3306',
//   user: 'root',
//   password: 'Roomdly1234',
//   database: 'fest_db'
// });


//connect to database middleware
app.use(function(req,res,next){
    req.db = dbConnectionPool;
    next();
});


// Sessions
app.use(session({
  name: 'FestApp2',
  secret: 'FestApp12345@',
  resave: true,
  saveUninitialized: true,
  cookie: {
    name: 'FestAppCookie',
    secure: false,
    expires : 360000 + Date.now()
  }
}))

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
app.use(cors({
  origin: [
    'http://localhost:3000'
  ],
  methods: "GET, POST",
  credentials: true
  // exposedHeaders: ['set-cookie'],
  // allowedHeaders: '*'
}))

// app.use(function(req, res, next) {
//   res.set('Access-Control-Allow-Origin', '*');
//   res.header("Access-Control-Allow-Headers","*");
//   res.set('Access-Control-Allow-Methods', 'GET, POST');
//   next();
// });

// Sessions
app.use(session({
  name: 'FestApp2',
  secret: 'FestApp12345@',
  resave: true,
  saveUninitialized: false,
  cookie: {
    name: 'FestAppCookie2',
    secure: false,
    expires : 360000 + Date.now()
  }
}))

router.use('/', function(req, res, next) {

  console.log(req.cookies);

  next();
})


app.use('/', indexRouter);
app.use('/users', usersRouter);

// Custom routes
app.use('/', dashboardRouter);
app.use('/', loginRouter);
app.use('/', signUpRouter);
app.use('/', logOutRouter);
app.use('/', profileRouter);
app.use('/', newEvent);
app.use('/', calendarRouter);
app.use('/', notificationsRouter);
app.use('/', eventAttendantsRouter);
app.use('/', eventDetailsRouter);
app.use('/', eventAttendantsByStatusRouter);

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
