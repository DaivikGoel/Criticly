var express = require('express');
var router = express.Router();
const con = require('../config.js')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/* GET users listing. */
router.get('/', function(req, res, next) {
    switch (req.query.type){
      case ('latest'):
        var sql = "SELECT reviews.*, users.username FROM reviews INNER JOIN users ON (reviews.userid = users.id) WHERE episodeid = " + req.query.episodeid + " ORDER BY modified_instant LIMIT 1"
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result)
          res.send(result);
          })
        break; 

      default:
        var sql = "SELECT reviews.*, users.username FROM reviews INNER JOIN users ON (reviews.userid = users.id) WHERE episodeid = " + req.query.episodeid 
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result)
          res.send(result);
          })
        break;
}

  });


module.exports = router;