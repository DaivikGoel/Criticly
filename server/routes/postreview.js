var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/* GET users listing. */
router.post('/', function(req, res, next) {

    var sql = "INSERT INTO reviews (userid, episodeid, seasonid, showid, rating, reviewtext) VALUES (" + req.body.userid + ',' + req.body.episodeid + ',' + req.body.seasonid + ',' + req.body.showid + ',' + req.body.rating + ',' + "'" +  req.body.reviewtext + "'" + ')' ; 
    executeQuery(sql, req ,res)
  });


module.exports = router;