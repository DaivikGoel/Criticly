var express = require('express');
var router = express.Router();
const executeQuery = require('../util/sqlWrapper.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
    switch (req.query.type){
    case ('season'):
      var sql = "SELECT AVG(rating), COUNT(rating) from reviews where showid =" + req.query.id + ""; 
      executeQuery(sql, req ,res)
      break;
    case ('episode'):
      var sql = "SELECT AVG(rating), COUNT(rating) from reviews where episodeid =" + req.query.id + ""; 
      executeQuery(sql, req ,res)
      break;

    default: 
      var sql = "SELECT AVG(rating), COUNT(rating) from reviews where showid =" + req.query.id + ""; 
      executeQuery(sql, req ,res)
      break;
    }
      });


module.exports = router;
