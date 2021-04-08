var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const executeQuery = require('../../util/sqlWrapper.js')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/* GET users listing. */
router.post('/', function(req, res, next) {

    switch (req.body.type){
      case ('remove'):
        if(req.body.category == 'show'){
        var sql = "DELETE FROM watched WHERE showid = " + req.body.showid + ' AND userid = ' + req.body.userid ; 
        executeQuery(sql, req ,res)
        }
        else if(req.body.category == 'season'){
        var sql = "DELETE FROM watched WHERE showid = " + req.body.showid + ' AND userid = ' + req.body.userid + ' AND seasonnumber = ' + req.body.seasonnumber; 
        executeQuery(sql, req ,res)
        }
        else {
        var sql = "DELETE FROM watched WHERE showid = " + req.body.showid + ' AND userid = ' + req.body.userid + ' AND seasonnumber = ' + req.body.seasonnumber + ' AND episodenumber = ' + req.body.episodenumber; 
        executeQuery(sql, req ,res)
        }
        break; 

      case ('add'):
        var sql = "INSERT INTO watched(showid, userid, seasonnumber, episodenumber) VALUES (" + req.body.showid + ',' + req.body.userid + ',' + req.body.seasonnumber + ','+ req.body.episodenumber + ')' ; 
        executeQuery(sql, req ,res)
        break; 

      default:
        var sql = "INSERT INTO watched(showid, userid, seasonnumber, episodenumber) VALUES (" + req.body.showid + ',' + req.body.userid + ',' + req.body.seasonnumber + ','+ req.body.episodenumber + ')' ; 
        executeQuery(sql, req ,res)
        break; 
    }

  });


module.exports = router;