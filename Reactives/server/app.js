var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/userz');
var getUserRouter = require('./routes/getUser');
var createUserRouter = require('./routes/createUser');
var hack1 = require('./services/Hackathon');
var allHacks = require('./services/getAllHacks');

var app = express();
/*var cors = require('cors')
app.use(cors())
app.options('*', cors());*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/userz', usersRouter);
app.use('/getUser', getUserRouter);
app.use('/createUser', createUserRouter);
app.use('/hack', hack1);
app.use('/allHacks', allHacks);

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


app.listen(4000);

module.exports = app;
