const express = require("express");

const Tasks = require("./tasks-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Tasks.all()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      console.log("err", err);
      res.status(500).json({ message: "Failed to get task." });
    });
});

router.post("/", (req, res) => {
  taskData = req.body;

  Tasks.add(taskData)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      console.log("err", err);
      res.status(500).json({ message: "Failed to add task." });
    });
});

module.exports = router;
