require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRouter = require("./routes/authRouter.js");
const authMiddleware = require("./middlewares/authMiddleware.js");
const Holding = require("./models/Holdings");
const Position = require("./models/Positions");
const Order = require("./models/Orders");

const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

// Allowed frontends
const allowedOrigins = [
  "https://zerodha-clone-rouge.vercel.app",
  "https://zerodha-clone-dashboard-gold.vercel.app"
];

const app = express();

// ===== MIDDLEWARE =====
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS middleware
app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like Postman or server-to-server)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      return callback(new Error("CORS policy: This origin is not allowed."), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

// Handle preflight requests for all routes
app.options("/", cors({ 
  origin: function(origin, callback) {
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      return callback(new Error("CORS policy: This origin is not allowed."), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

// ===== DATABASE =====
mongoose.connect(MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// ===== ROUTES =====

// Auth routes
app.use("/auth", authRouter);

// Protected holdings
app.get("/allholdings", authMiddleware, async (req, res) => {
  const allHoldings = await Holding.find({});
  res.status(200).json({ message: "Holdings fetched successfully", success: true, allHoldings });
});

// Protected positions
app.get("/allpositions", authMiddleware, async (req, res) => {
  const allPositions = await Position.find({});
  res.status(200).json({ message: "Positions fetched successfully", success: true, allPositions });
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

// Logout route
app.get("/logout", (req, res) => {
  try {
    if(req.cookies.token) {
      res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none"
      });
      res.status(200).json({ message: "Logout Successful", success: true });
    } else {
      res.status(400).json({ message: "No token found", success: false });
    }
  } catch(err) {
    res.status(500).json({ message: "Some error occurred, please try again later", success: false });
  }
});

// Verify token route
app.get("/verify", (req, res) => {
  if(req.cookies.token) {
    res.status(200).json({ message: "Token is valid", success: true });
  } else {
    res.status(401).json({ message: "Unauthorized Access", success: false });
  }
});

// ===== START SERVER =====
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
