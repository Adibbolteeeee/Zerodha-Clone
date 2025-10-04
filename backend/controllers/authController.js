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

    const newUser = new userModel({
      email,
      username,
      password,
    });
    newUser.password = await bcrypt.hash(password, 10);
    await newUser.save();
    res.status(201).json({ message: "Signup Successful", success: true });
  } catch (e) {
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
    const isPasswordEqual = await bcrypt.compare(password, user.password);
    if (!isPasswordEqual) {
      return res.status(403).json({
        message: "Wrong password! please try again.",
        success: false,
      });
    }

    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: 7 * 24 * 60 * 60 }
    );

    res.cookie("token", jwtToken, {
      httpOnly: true, // JS can't access it → safer than localStorage
      secure: false, // true if using https
      sameSite: "Lax", // allow cross-origin
      maxAge:  7 * 24 * 60 * 60 * 1000// 7 day
    });
    res.status(200).json({
      message: "Login Successful",
      success: true,
      email,
      jwtToken,
      username: user.username,
    });
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};
