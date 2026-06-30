const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectdb = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const packageRoutes = require("./routes/packageRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

dotenv.config();
console.log("JWT =", process.env.JWT_SECRET);

connectdb();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Tour and Travel Planning Management System Backend");
});

app.use("/users", userRoutes);
app.use("/packages", packageRoutes);
app.use("/bookings", bookingRoutes);

const port = process.env.PORT || 5500;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});