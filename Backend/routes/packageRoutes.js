/*const express = require("express");
const router = express.Router();
const Package = require("../models/package");

// Add Package
router.post("/", async (req, res) => {
    const pack = await Package.create(req.body);
    res.json(pack);
});

// View All Packages
router.get("/", async (req, res) => {
    const packs = await Package.find();
    res.json(packs);
});

// View Single Package
router.get("/:id", async (req, res) => {
    const pack = await Package.findById(req.params.id);
    res.json(pack);
});

// Update Package
router.put("/:id", async (req, res) => {
    const pack = await Package.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(pack);
});

// Delete Package
router.delete("/:id", async (req, res) => {
    await Package.findByIdAndDelete(req.params.id);
    res.json({ message: "Package Deleted" });
});

module.exports = router;*/

const express = require("express");
const router = express.Router();
const multer = require("multer");

const Package = require("../models/package");

// Upload Image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });


// Add Package
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const travelPackage = await Package.create({

      packageName: req.body.packageName,
      destination: req.body.destination,
      price: req.body.price,
      duration: req.body.duration,
      description: req.body.description,
      image: req.file ? req.file.filename : ""
    });
    res.json(travelPackage);
  }
  catch (error) {
    res.json({
      message: error.message
    });
  }
});


// View All Packages
router.get("/", async (req, res) => {
  const packages = await Package.find();
  res.json(packages);
});


// View Single Package
router.get("/:id", async (req, res) => {
  const travelPackage = await Package.findById(req.params.id);
  res.json(travelPackage);
});


// Update Package
router.put("/:id", async (req, res) => {
  const travelPackage = await Package.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(travelPackage);
});


// Delete Package
router.delete("/:id", async (req, res) => {
  await Package.findByIdAndDelete(req.params.id);
  res.json({
    message: "Package Deleted Successfully"
  });
});

module.exports = router;