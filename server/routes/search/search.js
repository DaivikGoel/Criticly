var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const executeQuery = require('../../util/sqlWrapper.js')

router.get('/', function(req, res, next) {
    let sql;

    switch (req.query.type){
      case ('users'):
        sql = "SELECT * FROM users where username LIKE '" + req.query.search + "%'"
        break;
      case ('lists'):
        sql = "SELECT * FROM users where username LIKE '" + req.query.search + "%'"
        break;
      default:
        sql = "SELECT * FROM users where username LIKE '" + req.query.search + "%'"
        break;
    }
    executeQuery(sql, req ,res)
  });


module.exports = router;