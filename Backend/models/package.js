const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({

  packageName: String,
  destination: String,
  price: Number,
  duration: String,
  description: String,
  image: String

});

module.exports = mongoose.model("Package", packageSchema);