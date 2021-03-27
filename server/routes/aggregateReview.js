var express = require('express');
var router = express.Router();
const con = require('../config.js')
const start = Date.now();

/* GET users listing. */
router.get('/', function(req, res, next) {

    res.sendStatus(200);
  con.connect(function(err) {
    if (err) throw err;
    var sql = "Select * from reviews where episodeid = '2431898'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
  });
  });

});

module.exports = router;
