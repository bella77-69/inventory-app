const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express();
const mysql = require('mysql');
const PORT = process.env.PORT || 5000;

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'inventory-stock-status'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/insert', (req, res) => {

  const color = req.body.color
  const quantity = req.body.quantity

  const sqlInsert = "INSERT INTO paint_inventory (color, quantity) VALUES (?,?);"
  db.query(sqlInsert, [color, quantity], (err, result) => {
    console.log(result)
  })
})

// app.get("/", (req, res) => {
//     // const sqlInsert = "INSERT INTO paint_inventory (color, inStock, quantity) VALUES ('blue', true, '100');"
//     // db.query(sqlInsert, (err, result) => {
//     //     res.send("hello");
//     // })
// });



app.listen(PORT, () => {
  console.log(`Server connected to port: ${PORT}`);
});


//npm run devStart to start nodemon