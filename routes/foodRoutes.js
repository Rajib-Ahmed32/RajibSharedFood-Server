const express = require("express");
const router = express.Router();
const { addFood } = require("../controllers/foodController");

router.post("/", addFood);

module.exports = router;
