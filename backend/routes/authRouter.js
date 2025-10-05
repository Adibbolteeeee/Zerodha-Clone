const express = require("express");
const router = express.Router();
const { signupValidation, loginValidation } = require("../middlewares/authValidation.js");
const { signupController, loginController } = require("../controllers/authController.js");

// Signup
router.post("/signup", signupValidation, signupController);

// Login
router.post("/login", loginValidation, loginController);

module.exports = router;
