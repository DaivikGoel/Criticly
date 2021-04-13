var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const executeQuery = require('../../util/sqlWrapper.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
        var sql = "SELECT id FROM users WHERE email =" +  "'" +  req.query.email+  "'";
        executeQuery(sql, req ,res)
  });


module.exports = router;