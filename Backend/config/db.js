const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    mongoose.connect(process.env.DBURL)

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectdb;