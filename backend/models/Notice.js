import mongoose from "mongoose";

const NoticeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Member", required: true },
    targetAudience: { 
      type: String, 
      enum: ["All", "Members", "Staff"], 
      default: "All" 
    }
  },
  { timestamps: true }
);

export default mongoose.model("Notice", NoticeSchema);
