var express = require('express');
var router = express.Router();
const con = require('../config.js')
const start = Date.now();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('respond with a resource');
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    console.log(start)
    var sql = "INSERT INTO users (name, username, email) VALUES ('Bob', 'BigDikBob', 'bob@bob.com')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
  });
  });

});

module.exports = router;
