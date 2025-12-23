import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    date: { type: Date },
    summary: { type: String, trim: true },
    location: { type: String, trim: true },
  },
  { _id: false }
);

const ClubSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    focusAreas: [{ type: String, trim: true }],
    tags: [{ type: String, trim: true }],
    events: [EventSchema],
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Club", ClubSchema);
