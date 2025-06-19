const express = require("express");
const { loginWithFirebaseToken } = require("../controllers/authController");

const router = express.Router();

router.post("/jwt-login", loginWithFirebaseToken);

module.exports = router;
