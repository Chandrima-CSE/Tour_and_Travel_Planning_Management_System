/*const express = require("express");
const router = express.Router();
const bcrypt =  require ('bcryptjs');
const jwt =  require ('jsonwebtoken');

const User = require("../models/user");

// Add User
router.post("/", async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

// View All Users
router.get("/", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// View Single User
router.get("/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

// Update User
router.put("/:id", async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(user);
});

// Delete User
router.delete("/:id", async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User Deleted" });
});

module.exports = router;*/

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");


// Register User (Add User)
router.post("/", async (req, res) => {
  try {

    // Check existing user
    const existingUser = await User.findOne({
      email: req.body.email
    });

    if (existingUser) {
      return res.json({
        message: "User already exists"
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create User
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role || "user"
    });

    // Generate JWT Token
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d"
      }
    );

    res.json({
      message: "User Registered Successfully",
      user,
      token
    });

  } catch (error) {
    res.json({
      message: error.message
    });
  }
});


// View All Users
router.get("/", async (req, res) => {

  const users = await User.find();

  res.json(users);

});


// View Single User
router.get("/:id", async (req, res) => {

  const user = await User.findById(req.params.id);

  res.json(user);

});


// Update User
router.put("/:id", async (req, res) => {

  const user = await User.findByIdAndUpdate(

    req.params.id,
    req.body,
    { new: true }

  );

  res.json(user);

});


// Delete User
router.delete("/:id", async (req, res) => {

  await User.findByIdAndDelete(req.params.id);

  res.json({
    message: "User Deleted Successfully"
  });

});

// Login User
router.post("/login", async (req, res) => {
  try {

    const user = await User.findOne({
      email: req.body.email
    });

    if (!user) {
      return res.json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isMatch) {
      return res.json({
        message: "Invalid Password"
      });
    }
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d"
      }
    );

    res.json({
      message: "Login Successful",
      token,
      user
    });

  } catch (error) {

    res.json({
      message: error.message
    });

  }
});
module.exports = router;