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



// const dbConn = mysql.createConnection({
//     host: 'us-cdbr-east-05.cleardb.net',
//     user: 'be61f38c636716',
//     password: '8a71952f',
//     database: 'heroku_02a34e026fc2413'
// });

