const dbConn = require("../config/db.config");

const Inventory = function (inventory) {
  this.color = inventory.color;
  this.quantity = inventory.quantity;
};

//get all inventory
Inventory.getAllInventory = (result) => {
  dbConn.query("SELECT * FROM paint_inventory", (err, res) => {
    if (err) {
      console.log("Error while fetching inventory", err);
      result(null, err);
    } else {
      console.log("Inventory fetched successfully");
      result(null, res);
    }
  });
};

//get inventory by Color for Search Data by color
Inventory.getInventoryByColor = (color, result) => {
  dbConn.query(
    "SELECT * FROM paint_inventory WHERE color = ?",
    color,
    (err, res) => {
      if (err) {
        console.log("Error while fetching inventory by color", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

// create new inventory
Inventory.createInventory = (inventoryReqData, result) => {
  dbConn.query(
    "INSERT INTO paint_inventory SET ?",
    inventoryReqData,
    (err, res) => {
      if (err) {
        console.log("Error while inserting data");
        result(null, err);
      } else {
        console.log("Inventory created successfully");
        result(null, res);
      }
    }
  );
};

//get inventory by ID for update
Inventory.getInventoryByID = (id, result) => {
  dbConn.query("SELECT * FROM paint_inventory WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("Error while fetching inventory by id", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

//update inventory
Inventory.updateInventory = (id, inventoryReqData, result) => {
  dbConn.query(
    "UPDATE paint_inventory SET color=?, quantity=? WHERE id = ?",
    [inventoryReqData.color, inventoryReqData.quantity, id],
    (err, res) => {
      if (err) {
        console.log("Error while updating inventory");
        result(null, err);
      } else {
        console.log("Inventory updated successfully");
        result(null, res);
      }
    }
  );
};

//delete inventory
Inventory.deleteInventory = (id, result) => {
  dbConn.query("DELETE from paint_inventory WHERE id=?", [id], (err, res) => {
    if (err) {
      console.log("Error while deleting the inventory");
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Inventory;
