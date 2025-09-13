const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");
const { protect } = require("../middleware/auth");

// Submit feedback
router.post("/", protect, async (req, res) => {
  const { course, rating, comment } = req.body;
  const feedback = await Feedback.create({ student: req.user._id, course, rating, comment });
  res.status(201).json(feedback);
});

// Get my feedbacks
router.get("/myfeedbacks", protect, async (req, res) => {
  const feedbacks = await Feedback.find({ student: req.user._id }).populate("course", "title");
  res.json(feedbacks);
});

module.exports = router;
