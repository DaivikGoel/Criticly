var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const executeQuery = require('../util/sqlWrapper.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);
    switch (req.query.type){
      case ('review'):
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