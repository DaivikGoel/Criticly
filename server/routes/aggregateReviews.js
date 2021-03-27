var express = require('express');
var router = express.Router();
const con = require('../config.js')
const start = Date.now();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var sql = "SELECT AVG(rating), COUNT(rating) from reviews where showid =" + req.query.showid + ""; 
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result)
      });
      });


module.exports = router;
