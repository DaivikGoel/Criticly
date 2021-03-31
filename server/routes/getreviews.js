var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const executeQuery = require('../util/sqlWrapper.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
    switch (req.query.type){
      case ('latest'):
        var sql = "SELECT r.*, u.username, COUNT(rl.reviewid) AS numberofLikes, count(case when rl.userid = " +req.query.userid +  " then 1 else null end) AS hasUserLiked FROM reviews as r INNER JOIN users as u ON (r.userid = u.id) "  + "LEFT JOIN reviewlikes as rl ON r.reviewid = rl.reviewid " + "where r.episodenumber = " + req.query.episodenumber + " AND r.seasonnumber = " + req.query.seasonnumber + " AND r.showid = " + req.query.showid + " GROUP BY r.reviewid" + " ORDER BY modified_instant LIMIT 1"
        executeQuery(sql, req ,res)
        break; 
      case ('user'):
        var sql = "SELECT reviews.* FROM reviews INNER JOIN users ON (reviews.userid = users.id) WHERE users.id = " + req.query.userid + " ORDER BY reviews.modified_instant DESC LIMIT 5"
        executeQuery(sql, req ,res)
        break; 

      default:
        var sql = "SELECT r.*, u.username, COUNT(rl.reviewid) AS numberofLikes, count(case when rl.userid = " +req.query.userid +  " then 1 else null end) AS hasUserLiked FROM reviews as r INNER JOIN users as u ON (r.userid = u.id) "  + "LEFT JOIN reviewlikes as rl ON r.reviewid = rl.reviewid " + "where r.episodenumber = " + req.query.episodenumber + " AND r.seasonnumber = " + req.query.seasonnumber + " AND r.showid = " + req.query.showid + " GROUP BY r.reviewid"
        executeQuery(sql, req ,res)
        break;
}

  });


module.exports = router;