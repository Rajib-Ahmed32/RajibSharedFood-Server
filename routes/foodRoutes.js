const express = require("express");
const router = express.Router();
const {
  addFood,
  requestFood,
  myFoodRequest,
  getSingleFood,
} = require("../controllers/foodController");
const {
  myDonatedFoods,
  updateFood,
  deleteFood,
} = require("../controllers/manageFood");
const verifyJwt = require("../middleware/authMiddleware");

router.post("/", verifyJwt, addFood);
router.patch("/request/:id", verifyJwt, requestFood);
router.get("/request/me", verifyJwt, myFoodRequest);
router.get("/mine", verifyJwt, myDonatedFoods);
router.get("/:id", verifyJwt, getSingleFood);
router.patch("/:id", verifyJwt, updateFood);
router.delete("/:id", verifyJwt, deleteFood);

module.exports = router;
