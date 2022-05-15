const express = require("express");
const router = express.Router();

const inventoryController = require("../controllers/inventory.controller");

// get all inventory
router.get("/", inventoryController.getInventoryList);

// get inventory by ID
router.get("/:id", inventoryController.getInventoryByID);

// get ID for Update
router.get(
  "/searchRecord/:first_name",
  inventoryController.getInventoryByColor
);

// // create new inventory
router.post("/", inventoryController.createNewInventory);

// update inventory
router.put("/:id", inventoryController.updateInventory);

// delete inventory
router.delete("/:id", inventoryController.deleteInventory);

module.exports = router;
