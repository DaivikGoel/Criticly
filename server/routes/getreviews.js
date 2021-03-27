var express = require('express');
var router = express.Router();
const con = require('../config.js')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/* GET users listing. */
router.post('/', function(req, res, next) {

    var sql = "SELECT reviews.*, users.username FROM reviews INNER JOIN users ON reviews.userid = users.id" 
    console.log(sql)
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
  });

  res.send('404');
  });


module.exports = router;