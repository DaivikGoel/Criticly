var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('respond with a resource');
    var sql = "INSERT INTO users (name, username, email) VALUES ('Bobby', 'Bojiizle', 'bob@bob.com')";
    executeQuery(sql, req ,res)

});

module.exports = router;
