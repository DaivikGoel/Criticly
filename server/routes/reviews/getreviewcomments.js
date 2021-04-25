//gets comments that users might have left for a review
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const executeQuery = require('../../util/sqlWrapper.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
    switch (req.query.type){
      case ('review'):
        //gets comments of a specific review from the reviewcomments table on the review id. 
        var sql = "SELECT * FROM reviewcomments as r INNER JOIN users as u ON (r.userid = u.id) WHERE reviewid = " + req.query.reviewid
        executeQuery(sql, req ,res)
        break; 

      default:
        var sql = "SELECT * FROM reviewcomments as r INNER JOIN users as u ON (r.userid = u.id) WHERE reviewid = " + req.query.reviewid
        executeQuery(sql, req ,res)
        break;
}

  });


module.exports = router;