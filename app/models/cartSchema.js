const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phoneNumber: String,
  address: String,
  vehicleBrand: String,
  vehicleMake: String,
  vehicleYear: Number,
  date: String,
  time: String,
  services: [String],
});

module.exports = mongoose.model("Cart", cartSchema);

