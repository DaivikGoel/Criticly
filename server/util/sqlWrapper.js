const con = require('../config.js')
    const executeQuery = (sql,req,res) => {
        con.query(sql, function (err, result) 
        {   
            if (err) {
                res.status(404).json({"status": "failure", "message": 'error occured in deleting: code - ' + err.code + " ,isFatal - " + err.fatal });
              }
              res.send(result);
        })
    }

module.exports = executeQuery;