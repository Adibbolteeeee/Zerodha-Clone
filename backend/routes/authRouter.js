const express = require("express");
const router = express.Router();
const {
  signupValidation,
  loginValidation,
} = require("../middlewares/authValidation.js");
const { signupController,loginController } = require("../controllers/authController.js");



router.post("/signup", 
    signupValidation, 
    signupController,
    (req, res) => {
  res.send("Signup Success");
});

router.post("/login", 
    loginValidation,
    loginController);

module.exports = router;
