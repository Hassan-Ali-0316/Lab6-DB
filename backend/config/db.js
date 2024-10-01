const mysql = require('mysql2');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "fast",
    database: "library"
});

db.connect(function(err){
    if(err){
        throw err;
    }
    console.log('Mysql connected :))');
});

module.exports = db;