const InventoryModel = require("../models/inventory.model");

// get all inventory list
exports.getInventoryList = (req, res) => {
  //console.log('here all inventory list');
  InventoryModel.getAllInventory((err, inventory) => {
    console.log("We are here");
    if (err) res.send(err);
    console.log("Inventory", inventory);
    res.send(inventory);
  });
};

// get inventory by Color for each by Color
exports.getInventoryByColor = (req, res) => {
  InventoryModel.getInventoryByColor(req.params.color, (err, inventory) => {
    if (err) res.send(err);
    console.log("single color inventory data", inventory);
    res.send(inventory);
  });
};

// create new inventory
exports.createNewInventory = (req, res) => {
  const inventoryReqData = new InventoryModel(req.body);
  console.log("inventoryReqData", inventoryReqData);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    InventoryModel.createInventory(inventoryReqData, (err, inventory) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "Inventory Created Successfully",
        data: inventory.insertId,
      });
    });
  }
};

// get inventory by ID  for Update
exports.getInventoryByID = (req, res) => {
  //console.log('get inventory by id');
  InventoryModel.getInventoryByID(req.params.id, (err, inventory) => {
    if (err) res.send(err);
    console.log("single inventory data", inventory);
    res.send(JSON.stringify({ status: 200, error: null, response: inventory }));
  });
};

// update inventory
exports.updateInventory = (req, res) => {
  const inventoryReqData = new InventoryModel(req.body);
  console.log("inventoryReqData update", inventoryReqData);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    InventoryModel.updateInventory(
      req.params.id,
      inventoryReqData,
      (err, inventory) => {
        if (err) res.send(err);
        res.json({ status: true, message: "Inventory updated Successfully" });
      }
    );
  }
};

// delete inventory
exports.deleteInventory = (req, res) => {
  InventoryModel.deleteInventory(req.params.id, (err, inventory) => {
    if (err) res.send(err);
    res.json({ success: true, message: "Inventory deleted successully!" });
  });
};
