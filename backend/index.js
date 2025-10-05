require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const Holding = require("./models/Holdings");
const Position = require("./models/Positions");
const Order = require("./models/Orders");
const bodyParser = require("body-parser");
const authRouter = require("./routes/authRouter.js");
const authMiddleware = require("./middlewares/authMiddleware.js");
const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;
const SESSION_SECRET = process.env.SESSION_SECRET || "mysecret";

const app = express();

// ===== MIDDLEWARE =====
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true
}));


// ===== DATABASE =====
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));



app.use("/auth",authRouter);
// Protected holdings
app.get("/allholdings", authMiddleware, async (req, res) => {
  const allHoldings = await Holding.find({});
  res.status(200).json({message:"Holdings fetched Succesfully",success:true,allHoldings});
});

// Protected positions
app.get("/allpositions", authMiddleware,async (req, res) => {
  const allPositions = await Position.find({});
  res.status(200).json({message:"Positions fetched Succesfully",success:true, allPositions});
});

// Place new order
app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;

  const newOrder = new Order({ name, qty, price, mode });
  if (mode === "BUY") {
    const newHolding = new Holding({
      name,
      qty,
      avg: price,
      price,
      net: "20.22",
      day: "+2.99%",
    });
    await newHolding.save();
  }

  await newOrder.save();
  res.json({ message: "Order placed!" });
});

// Default route
app.get("/", (req, res) => res.send("Server Working"));


//Logout Route
app.get("/logout",(req,res) => {
  try {
    if(req.cookies.token) {
      res.clearCookie("token");
      res.status(200).json({message:"Logout Successful",success:true})
    }
  }catch(err) {
    res.status(500).json({message:"Some error occured, Please try again later",success:false});
  }

//Private Routing
app.get("/verify",(req,res) => {
  if(req.cookies.token) {
    res.status(200).json({message:"Token is Valid",success:true})
  } else {
    res.status(401).json({ message: "Unauthorized Access", success: false });
  }
})
  
})
// ===== START SERVER =====
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
