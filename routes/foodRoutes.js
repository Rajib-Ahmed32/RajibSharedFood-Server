const express = require("express");
const router = express.Router();
const {
  addFood,
  requestFood,
  myFoodRequest,
  getSingleFood,
} = require("../controllers/foodController");
const verifyJwt = require("../middleware/authMiddleware");

router.post("/", verifyJwt, addFood);
router.patch("/request/:id", verifyJwt, requestFood);
router.get("/request/me", verifyJwt, myFoodRequest);
router.get("/:id", verifyJwt, getSingleFood);

module.exports = router;
