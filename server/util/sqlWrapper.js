const con = require('../config.js')
    const executeQuery = (sql,req,res) => {
        con.query(sql, function (err, result) 
        {   
            if (err) {
                res.status(404).json({"status": "failure", "message": '- ' + err.code + " ,isFatal - " + err.fatal });
              }
              res.send(result);
        })
    }

module.exports = executeQuery;