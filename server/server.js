const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

//set up server port
const PORT = 5000;

app.use(cors());
app.use(express.json());

//parse request data content
app.use(bodyParser.urlencoded({ extended: true }));

// Pick up React index.html file
this.app.use(express.static(path.join(__dirname, "../client/build")));

//define root route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
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
