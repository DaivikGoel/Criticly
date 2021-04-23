//get number of reviews, followers etc. from database 
var express = require('express');
var router = express.Router();
const executeQuery = require('../../util/sqlWrapper.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
    switch (req.query.type){
      //we switch sql queries based on type specified in the front end. Only grabbing the number of reviews as of right now. 
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
