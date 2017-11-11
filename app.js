
var express 			= require('express');
var path 					= require('path');
var favicon 			= require('serve-favicon');
var logger 				= require('morgan');
var cookieParser 	= require('cookie-parser');
var bodyParser 		= require('body-parser');

var index 				= require('./routes/index');
var users 				= require('./routes/users');
var comp_mas 			= require('./routes/comp_mas');
var branch_mas 		= require('./routes/branch_mas'); 
var user_mas 			= require('./routes/user_mas'); 
var bscitem_mas 	= require('./routes/bscitem_mas'); 
var bizgrp_mas 		= require('./routes/bizgrp_mas'); 
var bizcomp_mas 	= require('./routes/bizcomp_mas');
var biztrx_mas 		= require('./routes/biztrx_mas');
var biztrx_his 		= require('./routes/biztrx_his');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/users'			, users);
app.use('/comp_mas'		, comp_mas);
app.use('/branch_mas'	, branch_mas);
app.use('/user_mas'		, user_mas);
app.use('/bscitem_mas', bscitem_mas);
app.use('/bizgrp_mas' , bizgrp_mas);
app.use('/bizcomp_mas', bizcomp_mas);
app.use('/biztrx_mas' , biztrx_mas);
app.use('/biztrx_his' , biztrx_his);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
