const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'inventory-stock-status'
});
dbConn.connect(function(error) {
    if (error) throw error;
    console.log('Database connected Successfully!!!');
})

module.exports = dbConn;