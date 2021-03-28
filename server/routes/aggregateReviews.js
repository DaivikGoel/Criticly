var express = require('express');
var router = express.Router();
const con = require('../config.js')
const start = Date.now();
const executeQuery = require('../util/sqlWrapper.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
    var sql = "SELECT AVG(rating), COUNT(rating) from reviews where showid =" + req.query.showid + ""; 
    executeQuery(sql, req ,res)
      });


module.exports = router;
