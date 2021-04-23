//creates new user in our local mysql database
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const executeQuery = require('../../util/sqlWrapper.js')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/* GET users listing. */
router.post('/', function(req, res, next) {
        //creates sql query to insert into users table using query data
        var sql = "INSERT INTO users (name, username, email, profile_pic, bio) VALUES (" +  "'" + req.body.name +  "'" +  ',' +  "'" + req.body.username +  "'" + ',' +  "'" +  req.body.email +  "'" +  ',' +  "'" +  req.body.profile_pic +  "'" +  ',' +  "'" + req.body.bio + "'" + ')' ;
        executeQuery(sql, req ,res)

  });


module.exports = router;