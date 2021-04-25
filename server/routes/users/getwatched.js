//find out what episodes the user has watched in each season 
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const executeQuery = require('../../util/sqlWrapper.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
    switch (req.query.type){
      case ('season'):
        //we find out the episodes the user has seen by looking at the show id and seasonnumber. 
        var sql = "SELECT * FROM watched WHERE userid =" + req.query.userid + " AND showid = " + req.query.showid + " AND seasonnumber = " + req.query.seasonnumber + " ORDER BY episodenumber";
        executeQuery(sql, req ,res)
        break; 

      default:
        var sql = "SELECT * FROM watched WHERE userid =" + req.query.userid + " AND showid = " + req.query.showid + " AND seasonnumber = " + req.query.seasonnumber+ " ORDER BY episodenumber";
        executeQuery(sql, req ,res)
        break;
}

  });


module.exports = router;