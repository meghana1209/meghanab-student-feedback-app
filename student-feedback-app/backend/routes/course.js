const express = require("express");
const router = express.Router();
const Course = require("../models/Course");
const { protect } = require("../middleware/auth");
const admin = require("../middleware/admin");

// Get all courses
router.get("/", protect, async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// Add course (Admin only)
router.post("/", protect, admin, async (req, res) => {
  const { title, description } = req.body;
  const course = await Course.create({ title, description });
  res.status(201).json(course);
});

module.exports = router;
