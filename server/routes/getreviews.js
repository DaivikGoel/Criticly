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
        var sql = "SELECT reviews.*, users.username FROM reviews INNER JOIN users ON (reviews.userid = users.id) WHERE episodeid = " + req.query.episodeid + " ORDER BY modified_instant LIMIT 1"
        executeQuery(sql, req ,res)
        break; 
      case ('user'):
        var sql = "SELECT reviews.* FROM reviews INNER JOIN users ON (reviews.userid = users.id) WHERE users.id = " + req.query.userid + " ORDER BY reviews.modified_instant DESC LIMIT 5"
        executeQuery(sql, req ,res)
        break; 

      default:
        var sql = "SELECT reviews.*, users.username FROM reviews INNER JOIN users ON (reviews.userid = users.id) WHERE episodeid = " + req.query.episodeid 
        executeQuery(sql, req ,res)
        break;
}

  });


module.exports = router;