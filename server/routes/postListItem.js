var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const executeQuery = require('../util/sqlWrapper.js')

router.post('/', function(req, res, next) {
        var sql = "INSERT INTO lists (userid, listtype, title, showid ) VALUES (" + req.body.userid + ',' + "'" + req.body.listtype + "'" +  ',' + "'" +  req.body.title + "'" + ',' + "'" +  req.body.showid + "'"  + ')' ;
         executeQuery(sql, req ,res)
  });


module.exports = router;