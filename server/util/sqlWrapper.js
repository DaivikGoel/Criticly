const con = require('../config.js')
const executeQuery = (sql,req,res) => 
    con.query(sql, function (err, result) {
        if (err) 
            throw err;
        res.send(result);
        })
module.exports = executeQuery;