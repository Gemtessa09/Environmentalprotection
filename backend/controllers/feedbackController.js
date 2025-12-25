import Feedback from "../models/Feedback.js";

// Create feedback (Members)
export const createFeedback = async (req, res, next) => {
  try {
    const { subject, message } = req.body;
    const feedback = new Feedback({
      subject,
      message,
      author: req.member._id
    });
    await feedback.save();
    res.status(201).json(feedback);
  } catch (err) {
    next(err);
  }
};

// Get all feedback (Admin only)
export const getAllFeedback = async (req, res, next) => {
  try {
    const feedbacks = await Feedback.find()
      .populate("author", "name email")
      .sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    next(err);
  }
};
