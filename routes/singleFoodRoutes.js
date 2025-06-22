const express = require("express");
const router = express.Router();
const { getSingleFood } = require("../controllers/foodController");
const verifyJwt = require("../middleware/authMiddleware");

router.get("/:id", verifyJwt, getSingleFood);

module.exports = router;
