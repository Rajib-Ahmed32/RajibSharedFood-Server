const express = require("express");
const router = express.Router();
const { availableFoods } = require("../controllers/foodController");
const verifyJwt = require("../middleware/authMiddleware");

router.get("/", verifyJwt, availableFoods);

module.exports = router;
