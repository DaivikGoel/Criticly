var express = require('express');
var router = express.Router();
const con = require('../config.js')
const start = Date.now();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('respond with a resource');
  
  });


module.exports = router;