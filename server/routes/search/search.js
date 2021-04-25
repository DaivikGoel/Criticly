//Search for users or lists from OUR internal Database. TV show info comes from an external Api. 
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
        //searching our database by username
        sql = "SELECT * FROM users where username LIKE '" + req.query.search + "%'"
        break;
      case ('lists'):
        //searching our database for lists by name. Still need to implement
        sql = "SELECT * FROM users where username LIKE '" + req.query.search + "%'"
        break;
      default:
        sql = "SELECT * FROM users where username LIKE '" + req.query.search + "%'"
        break;
    }
    executeQuery(sql, req ,res)
  });


module.exports = router;