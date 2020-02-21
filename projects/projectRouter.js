const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.all()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      console.log("err", err);
      res.status(500).json({ message: "Failed to get projects." });
    });
});

router.post("/", (req, res) => {
  projectData = req.params;

  Projects.add(projectData)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to add project." });
    });
});

module.exports = router;
