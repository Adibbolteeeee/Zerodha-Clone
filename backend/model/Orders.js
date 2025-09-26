const OrdersSchema = require("../schemas/OrdersSchema");
const mongoose = require("mongoose")

const Order = mongoose.model("order",OrdersSchema);
module.exports = Order;
