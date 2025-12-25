import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
export default Feedback;
