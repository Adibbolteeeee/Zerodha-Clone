require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Holding = require("./model/Holdings");
const Position = require("./model/Positions");
const Order = require("./model/Orders.js");
const { holdings, positions } = require("../dashboard/src/data/data.js");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

//MongoDB setup
const URL = process.env.MONGO_URL;

main()
  .then(() => {
    console.log("Database connection successful...");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  mongoose.connect(URL);
}

//adding holdings for temporary data

// app.get("/addholdings", async (req, res) => {
//   await Holding.deleteMany({});
//   holdings.forEach((item) => {
//     let newHolding = new Holding({
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.day,
//         day: item.day,
//     });
//     newHolding.save();
//   });
//   res.send("Holdings added");
// });




// //Adding positions for temporary data
// app.get("/addpositions", async (req, res) => {
//   await Position.deleteMany({});
//   positions.forEach((item) => {
//     let newPosition = new Position({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     newPosition.save();
//   });
//   res.send("Positions added");
// });


app.get("/allholdings",async(req,res) => {
    let allHoldings = await Holding.find({});
    res.json(allHoldings);
});
app.get("/allpositions",async(req,res) => {
    let allPositions = await Position.find({});
    res.json(allPositions);
});

app.post("/newOrder",async(req,res) => {
  let newOrder = new Order({
    name: req.body.name,
    qty : req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  
  await newOrder.save();
  res.send("Order Placed!")
})

app.get("/",(req,res)=> {
  res.send("Server Working");
})

app.listen(PORT, () => {
  console.log("App Started");
});
