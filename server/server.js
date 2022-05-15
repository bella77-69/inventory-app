const express = require("express");
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'inventory-stock-status'
});


const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    // const sqlInsert = "INSERT INTO paint_inventory (color, inStock, quantity) VALUES ('blue', true, '100');"
    // db.query(sqlInsert, (err, result) => {
    //     res.send("hello");
    // })
});

app.listen(PORT, () => {
  console.log(`Server connected to port: ${PORT}`);
});


//npm run devStart to start nodemon