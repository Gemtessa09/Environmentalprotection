import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "Member", required: true },
    assignedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Member", required: true },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending"
    },
    dueDate: { type: Date },
    completedAt: { type: Date }
  },
  { timestamps: true }
);

export default mongoose.model("Task", TaskSchema);
