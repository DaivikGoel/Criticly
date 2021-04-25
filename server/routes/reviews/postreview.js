//add a review for an episode
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const executeQuery = require('../../util/sqlWrapper.js')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/* GET users listing. */
router.post('/', function(req, res, next) {
  //adding information into our review table. 
  var sql = "INSERT INTO reviews (userid, episodenumber, seasonnumber, showid, rating, reviewtext) VALUES (" + req.body.userid + ',' + req.body.episodenumber + ',' + req.body.seasonnumber + ',' + req.body.showid + ',' + req.body.rating + ',' + "'" +  req.body.reviewtext + "'" + ')' ; 
  executeQuery(sql, req ,res)

  });


module.exports = router;