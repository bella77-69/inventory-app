const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const path = require('path');
//set up server port
const PORT = 5000;


app.use(express.json());

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
app.use(cors());
//parse request data content
app.use(bodyParser.urlencoded({ extended: true }));

//define root route
app.get("/", (req, res) => {
  res.send("Welcome to Inventory App API");
});

//import inventory/admin routes
const inventoryRoutes = require("./routes/inventory.route");
const adminRoutes = require("./routes/admin.route");
//create inventory/admin routs
app.use("/api/inventory", inventoryRoutes);
app.use("/api/inventory/admin", adminRoutes);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server connected to port: ${PORT}`);
});

