var express = require('express');
var router = express.Router();
const con = require('../config.js')

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('respond with a resource');
    var sql = "INSERT INTO users (name, username, email) VALUES ('Mal', 'Mallicious', 'mall@mall.com')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
  });

});

module.exports = router;
