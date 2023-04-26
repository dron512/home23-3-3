const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    res.send("text");
  });
  
router.get("/json", function (req, res) {
    res.json("json");
});

module.exports=router;