const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin.controller");

//get all records
router.get("/", adminController.getAllUsers);

// get user by ID
router.get("/:id", adminController.getUserByID);

// // get ID for Update
router.get(
  "/searchRecord/:email",
  adminController.getUserByEmail
);

// // create new user
router.post("/", adminController.createNewUser);

// update user
router.put("/:id", adminController.updateUser);

// delete user
router.delete("/:id", adminController.deleteUser);

module.exports = router;