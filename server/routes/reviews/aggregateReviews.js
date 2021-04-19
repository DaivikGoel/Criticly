var express = require('express');
var router = express.Router();
const executeQuery = require('../../util/sqlWrapper.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
    switch (req.query.type){
    case ('season'):
      var sql = "SELECT AVG(rating) as GlobalRating, COUNT(rating) as GlobalCountRating, avg(case when userid=" + req.query.userid+ " then rating else null end) as userAverage from reviews where showid =" + req.query.showid; 
      executeQuery(sql, req ,res)
      break;
    case ('episode'):
      var sql = "SELECT AVG(rating) as GlobalEpisodeRating, COUNT(rating) as GlobalEpisodeCountRating, AVG(case when userid=" + req.query.userid+ " then rating else null end) as userRating from reviews where episodenumber = " + req.query.episodenumber + " AND seasonnumber = " + req.query.seasonnumber + " AND showid = " + req.query.showid; 
      executeQuery(sql, req ,res)
      break;

    default: 
      var sql = "SELECT AVG(rating), COUNT(rating) from reviews where showid =" + req.query.showid + ""; 
      executeQuery(sql, req ,res)
      break;
    }
      });


module.exports = router;
