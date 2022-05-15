const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

//set up server port
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//parse request data content
app.use(bodyParser.urlencoded({ extended: true }));

//define root route
app.get("/", (req, res) => {
  res.send("Welcome to Inventory App API");
});

//import inventory routes
const inventoryRoutes = require("./routes/inventory.route");

//create inventory routs
app.use("/api/inventory", inventoryRoutes);

app.listen(PORT, () => {
  console.log(`Server connected to port: ${PORT}`);
});

//npm run devStart to start nodemon
