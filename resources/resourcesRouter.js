const express = require("express");

const Resources = require("./resources-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Resources.all()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      console.log("err", err);
      res.status(500).json({ message: "Failed to get resources." });
    });
});

router.post("/", (req, res) => {
  resourceData = req.body;

  Resources.add(resourceData)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(err => {
      console.log("err", err);
      res.status(500).json({ message: "Failed to add resource." });
    });
});

module.exports = router;
