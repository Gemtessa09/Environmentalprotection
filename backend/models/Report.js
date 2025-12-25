import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
    required: true
  },
  type: {
    type: String,
    enum: ["Issue", "Activity", "General", "Financial"],
    default: "General"
  },
  status: {
    type: String,
    enum: ["Pending", "Reviewed", "Resolved"],
    default: "Pending"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Report = mongoose.model("Report", reportSchema);
export default Report;
