const mysql = require('mysql');

const dbConn = mysql.createConnection({
    // host: 'localhost',
    // user: 'root',
    // password: 'rootroot',
    // database: 'inventory-stock-status'
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'baf717b04eedd0',
    password: 'ff378ebf',
    database: 'heroku_a67a80bcac74b8f'
});
dbConn.connect(function(error) {
    if (error) throw error;
    console.log('Database connected Successfully!!!');
})

module.exports = dbConn;

