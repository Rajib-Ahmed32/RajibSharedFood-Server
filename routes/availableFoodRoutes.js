const express = require("express");
const router = express.Router();
const { availableFoods } = require("../controllers/foodController");

router.get("/", availableFoods);

module.exports = router;
