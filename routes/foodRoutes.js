const express = require("express");
const router = express.Router();
const { addFood } = require("../controllers/foodController");
const verifyJwt = require("../middleware/authMiddleware");

router.post("/", verifyJwt, addFood);

module.exports = router;
