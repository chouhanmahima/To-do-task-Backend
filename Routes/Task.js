const express = require("express");

const taskContainer = require("../Controllers/Task") 

const router = express.Router();

// Create Task
router.post("/add-task", taskContainer.addTask);

// Get All Task
router.get("/get-all-task", taskContainer.getAllTask);

module.exports = router;