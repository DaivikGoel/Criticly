//add that you liked a review
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const executeQuery = require('../../util/sqlWrapper.js')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/* GET users listing. */
router.post('/', function(req, res, next) {

    switch (req.body.type){
      case ('remove'):
        //query to remove a like
        var sql = "DELETE FROM reviewlikes WHERE reviewid = " + req.body.reviewid + ' AND userid = ' + req.body.userid ; 
        executeQuery(sql, req ,res)
        break; 
      case ('add'):
        //query to add a like
        var sql = "INSERT INTO reviewlikes (reviewid, userid) VALUES (" + req.body.reviewid + ',' + req.body.userid + ')' ; 
        executeQuery(sql, req ,res)
        break; 

      default:
        var sql = "INSERT INTO reviewlikes (reviewid, userid) VALUES (" + req.body.reviewid + ',' + req.body.userid + ')' ; 
        executeQuery(sql, req ,res)
        break; 
    }

  });


module.exports = router;