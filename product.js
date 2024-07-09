const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  Age: Number,
  Networth: String,
});

module.exports = mongoose.model("products", ProductSchema);