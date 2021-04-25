// depending on whether the user has opened a season page or an episode page this will give us stats on the global ratings for the media (average rating, average rating for the user etc) 
var express = require('express');
var router = express.Router();
const executeQuery = require('../../util/sqlWrapper.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
    switch (req.query.type){
    case ('season'):
      //creating query to get information for the season. Right now we are pulling global information. Need to implement this as needed
      var sql = "SELECT AVG(rating) as GlobalRating, COUNT(rating) as GlobalCountRating, avg(case when userid=" + req.query.userid+ " then rating else null end) as userAverage from reviews where showid =" + req.query.showid; 
      executeQuery(sql, req ,res)
      break;
    case ('episode'):
      //gets information for specific episode
      var sql = "SELECT AVG(rating) as GlobalSeasonRating, AVG(case when episodenumber = " +req.query.episodenumber+ " then rating else null end) as GlobalEpisodeRating, COUNT(rating) as GlobalEpisodeCountRating, AVG(case when userid=" + req.query.userid+ " AND episodenumber = " + req.query.episodenumber + " then rating else null end) as userRating from reviews where seasonnumber = " + req.query.seasonnumber + " AND showid = " + req.query.showid; 
      executeQuery(sql, req ,res)
      break;

    default: 
      var sql = "SELECT AVG(rating), COUNT(rating) from reviews where showid =" + req.query.showid + ""; 
      executeQuery(sql, req ,res)
      break;
    }
      });


module.exports = router;
