var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postReviewsRouter = require('./routes/postreview');
var postReviewLikeRouter = require('./routes/postreviewlike');
var getReviewsRouter = require('./routes/getreviews');
var getReviewCommentsRouter = require('./routes/getreviewcomments');
var getAggregateReviewsRouter = require('./routes/aggregateReviews');
var getUserStatsRouter = require('./routes/getuserstats');
var getUsersRouter = require('./routes/getuserinfo');
var postListItemRouter = require('./routes/postListItem');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/postreview', postReviewsRouter);
app.use('/postreviewlike', postReviewLikeRouter);
app.use('/getreviews', getReviewsRouter);
app.use('/getreviewcomments', getReviewCommentsRouter);
app.use('/getuserinfo', getUsersRouter)
app.use('/aggregateReviews?:id', getAggregateReviewsRouter);
app.use('/getuserstats', getUserStatsRouter);
app.use('/postListItem',postListItemRouter);

const con = require('./config.js')
con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
});

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
