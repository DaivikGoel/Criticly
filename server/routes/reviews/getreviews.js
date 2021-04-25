//get the latest review for an episode globally, the latest reviews from a specific user, or all the reviews for an episode
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const executeQuery = require('../../util/sqlWrapper.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  let sql;
    switch (req.query.type){
      case ('latest'):
        //getting the latest review for an episode. We are pulling information on the review including the review metadata(username, title of review etc.), number of likes and comments on the review and if the logged in user has liked it 
        sql = "SELECT r.*, u.username, COUNT(distinct rl.reviewid, rl.userid) AS numberofLikes, COUNT(distinct rc.commentid) AS numberofComments, count(case when rl.userid = " +req.query.userid +  " then 1 else null end) AS hasUserLiked FROM reviews as r INNER JOIN users as u ON (r.userid = u.id) "  + "LEFT JOIN reviewlikes as rl ON r.reviewid = rl.reviewid " + "LEFT JOIN reviewcomments as rc ON r.reviewid = rc.reviewid " + "where r.episodenumber = " + req.query.episodenumber + " AND r.seasonnumber = " + req.query.seasonnumber + " AND r.showid = " + req.query.showid + " GROUP BY r.reviewid" + " ORDER BY modified_instant LIMIT 1"
        break;
      case ('user'):
        //getting 5 latest reviews of logged in user
        sql = "SELECT reviews.* FROM reviews INNER JOIN users ON (reviews.userid = users.id) WHERE users.id = " + req.query.userid + " ORDER BY reviews.modified_instant DESC LIMIT 5"
        break;
      default:
        //getting all reviews for an episode. We are pulling information on the review including the review metadata(username, title of review etc.), number of likes and comments on the review and if the logged in user has liked it 
        sql = "SELECT r.*, u.username, COUNT(distinct rl.reviewid, rl.userid) AS numberofLikes, COUNT(distinct rc.commentid) AS numberofComments, count(case when rl.userid = " +req.query.userid +  " then 1 else null end) AS hasUserLiked FROM reviews as r INNER JOIN users as u ON (r.userid = u.id) "  + "LEFT JOIN reviewlikes as rl ON r.reviewid = rl.reviewid " + "LEFT JOIN reviewcomments as rc ON r.reviewid = rc.reviewid " + "where r.episodenumber = " + req.query.episodenumber + " AND r.seasonnumber = " + req.query.seasonnumber + " AND r.showid = " + req.query.showid + " GROUP BY r.reviewid"
        break;
}
    executeQuery(sql, req ,res)
  });


module.exports = router;