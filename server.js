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

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server connected to port: ${PORT}`);
});

//define root route
app.get("/", (req, res) => {
  res.send("Welcome to Inventory App API");
});


//create inventory/admin routs
app.use("/api/inventory", inventoryRoutes);
app.use("/api/inventory/admin", adminRoutes);



