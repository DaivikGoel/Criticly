// add a review comment to a review
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const executeQuery = require('../../util/sqlWrapper.js')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/* GET users listing. */
router.post('/', function(req, res, next) {
  //add comment to the reviewcomments table. 
  var sql = "INSERT INTO reviewcomments (userid, reviewid, reviewcomment) VALUES (" + req.body.userid + ',' + req.body.reviewid + ',' + "'" +  req.body.reviewcomment + "'" + ')' ; 
  executeQuery(sql, req ,res)
  });


module.exports = router;