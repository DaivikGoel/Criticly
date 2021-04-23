//interacts with our server to get the id of the our user using the email fetched from firebase. This is the bridge between the firebase service and our local mysql database user table

var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const executeQuery = require('../../util/sqlWrapper.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  //getting userid for our internal database using email 
  var sql = "SELECT id FROM users WHERE email =" +  "'" +  req.query.email+  "'";
  executeQuery(sql, req ,res)
  });


module.exports = router;