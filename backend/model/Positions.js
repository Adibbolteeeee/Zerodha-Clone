const PositionsSchema = require("../schemas/PositionsSchema");
const mongoose = require("mongoose")

const Position = mongoose.model("position",PositionsSchema);
module.exports = Position;
