const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const inventoryRoutes = require("./routes/inventory.route");
const adminRoutes = require("./routes/admin.route");
const path = require('path');

app.use(express.json());
app.use(cors());
//parse request data content
app.use(bodyParser.urlencoded({ extended: true }));

//set up server port
const PORT = process.env.PORT || 5000;

// // ... other app.use middleware 
// app.use(express.static(path.join(__dirname, "client")))
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client"));
// });


//define root route
// app.get("/", (req, res) => {
//   res.send("Welcome to Inventory App API");
// })

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.get('*', (req, res) =>{
    res.sendfile(path.join(__dirname + "./client/build/index.html"));
});

app.listen(PORT, (req, res) => {
  console.log(`Server connected to port: ${PORT}`)
})

//create inventory/admin routs
app.use("/api/inventory", inventoryRoutes);
app.use("/api/inventory/admin", adminRoutes);



