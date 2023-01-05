var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bp=require('body-parser');
var logger = require('morgan');
var session=require('express-session');
// const mongoose=require('mongoose');

// const connect=mongoose.connect("mongodb://localhost:27017/API");

// connect.then((db) => {
//   console.log("Connected properly");
// }, (err) => { console.log(err); });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var upload_fileRouter=require('./routes/upload_file');
var ttsRouter=require('./routes/text_file_to_audio');
var mergeImgAudRouter = require('./routes/merge_image_and_audio');
var mergeVidAudRouter = require('./routes/merge_video_and_audio');
var mergeVidRouter=require('./routes/merge_all_video');
var downloadRouter = require('./routes/download_file');
var tokenRouter = require('./routes/create_new_storage');
var listRouter = require('./routes/my_upload_file');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({resave: true, saveUninitialized: true, secret: 'XCR3rsasa%RDHHH', cookie: { maxAge: 60000 }}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/upload_file',upload_fileRouter);
app.use('/text_file_to_audio',ttsRouter);
app.use('/merge_image_and_audio',mergeImgAudRouter);
app.use('/merge_video_and_audio',mergeVidAudRouter);
app.use('/merge_all_video',mergeVidRouter);
app.use('/download_file',downloadRouter);
app.use('/create_new_storage',tokenRouter);
app.use('/my_upload_file',listRouter);

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
