var express = require('express');
var router = express.Router();
const con = require('../config.js')
const start = Date.now();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log("here at least")
    var sql = "SELECT * from reviews" 
    console.log(sql)
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
      });
      
      res.send('404');
      });


module.exports = router;
