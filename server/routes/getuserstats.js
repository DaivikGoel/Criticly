var express = require('express');
var router = express.Router();
const executeQuery = require('../util/sqlWrapper.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
    switch (req.query.type){
    case ('reviews'):
      var sql = "SELECT COUNT(*) from reviews where userid =" + req.query.userid + ""; 
      executeQuery(sql, req ,res)
      break;
    case ('followers'):
      var sql = "SELECT COUNT(*) from reviews where userid =" + req.query.userid + ""; 
      executeQuery(sql, req ,res)
      break;
    case ('following'):
      var sql = "SELECT COUNT(*) from reviews where userid =" + req.query.userid + ""; 
      executeQuery(sql, req ,res)
      break;
    default: 
      var sql = "SELECT COUNT(*) from reviews where userid =" + req.query.userid + ""; 
      executeQuery(sql, req ,res)
      break;
    }
      });


module.exports = router;
