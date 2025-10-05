const { userModel } = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.signupController = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = await userModel.findOne({ email });

    if (user) {
      return res.status(409).json({
        message: "You are already a registered User.",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      email,
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "Signup Successful", success: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

module.exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(403).json({
        message: "Email or Password is wrong",
        success: false,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(403).json({
        message: "Wrong password! please try again.",
        success: false,
      });
    }

    // Create JWT token
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Set cookie with secure cross-origin settings
    res.cookie("token", jwtToken, {
      httpOnly: true,
      secure: true,        // HTTPS only
      sameSite: "none",    // allows cross-origin
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
      message: "Login Successful",
      success: true,
      email,
      username: user.username,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};
