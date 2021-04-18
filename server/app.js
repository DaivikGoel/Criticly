var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');


//Reviews
var postReviewsRouter = require('./routes/reviews/postreview');
var postCommentRouter = require('./routes/reviews/postcomment');
var postReviewLikeRouter = require('./routes/reviews/postreviewlike');
var getReviewsRouter = require('./routes/reviews/getreviews');
var getReviewCommentsRouter = require('./routes/reviews/getreviewcomments');

//Users
var getAggregateReviewsRouter = require('./routes/reviews/aggregateReviews');
var getUserStatsRouter = require('./routes/users/getuserstats');
var getUsersRouter = require('./routes/users/getuserinfo');
var usersRouter = require('./routes/users/users');
var getWatchedRouter = require('./routes/users/getwatched');
var postWatchedRouter = require('./routes/users/postwatched');

//Lists
var postListItemRouter = require('./routes/postListItem');
var postUserListItemRouter = require('./routes/PostUserList.js');
var getUserListItem = require('./routes/getUserList');

//Authentication

var LoginRouter = require('./routes/authentication/login');
var SignUpRouter = require('./routes/authentication/signup');
var registerRouter = require('./routes/authentication/register');
var getUseridRouter = require('./routes/authentication/getuserid');

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
app.use('/postUserList',postUserListItemRouter);
app.use('/getUserList',getUserListItem);
app.use('/postcomment',postCommentRouter);
app.use('/postwatched',postWatchedRouter);
app.use('/getwatched',getWatchedRouter);
app.use('/Login',LoginRouter);
app.use('/signup',SignUpRouter);
app.use('/register',registerRouter);
app.use('/getuserid',getUseridRouter);


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
