var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const executeQuery = require('../util/sqlWrapper.js')

router.get('/', function(req, res, next) {
        var sql = "SELECT * FROM lists WHERE userid =" + req.query.userid;
        executeQuery(sql, req ,res)
  });


module.exports = router;