/*const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");

// Add Booking
router.post("/", async (req, res) => {
    const booking = await Booking.create(req.body);
    res.json(booking);
});

// View All Bookings
router.get("/", async (req, res) => {
    const bookings = await Booking.find()
        .populate("userId")
        .populate("packageId");

    res.json(bookings);
});

// View Single Booking
router.get("/:id", async (req, res) => {
    const booking = await Booking.findById(req.params.id)
        .populate("userId")
        .populate("packageId");

    res.json(booking);
});

// Delete Booking
router.delete("/:id", async (req, res) => {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking Deleted" });
});

module.exports = router;*/

const express = require("express");
const router = express.Router();

const Booking = require("../models/booking");


// Add Booking
router.post("/", async (req, res) => {

  try {

    const booking = await Booking.create({

      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      destination: req.body.destination,
      travelDate: req.body.travelDate,
      travelers: req.body.travelers

    });

    res.json(booking);

  } catch (error) {

    res.json({
      message: error.message
    });

  }

});


// View All Bookings
router.get("/", async (req, res) => {

  const bookings = await Booking.find();

  res.json(bookings);

});


// View Single Booking
router.get("/:id", async (req, res) => {

  const booking = await Booking.findById(req.params.id);

  res.json(booking);

});


// Update Booking
router.put("/:id", async (req, res) => {

  const booking = await Booking.findByIdAndUpdate(

    req.params.id,
    req.body,
    { new: true }

  );

  res.json(booking);

});


// Delete Booking
router.delete("/:id", async (req, res) => {

  await Booking.findByIdAndDelete(req.params.id);

  res.json({
    message: "Booking Deleted Successfully"
  });

});

module.exports = router;