const express = require("express");
const router = express.Router();
const { addFood, requestFood } = require("../controllers/foodController");
const verifyJwt = require("../middleware/authMiddleware");

router.post("/", verifyJwt, addFood);
router.patch("/request/:id", verifyJwt, requestFood);

module.exports = router;
