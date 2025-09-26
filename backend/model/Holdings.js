const HoldingsSchema = require("../schemas/HoldingsSchema");
const mongoose = require("mongoose")

const Holding = mongoose.model("holding",HoldingsSchema);
module.exports = Holding;
