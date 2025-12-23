import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const MemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["Member", "Staff", "Admin"],
      default: "Member",
      trim: true
    },
    joinReason: { type: String, trim: true },
    active: { type: Boolean, default: true },
    department: { type: String, trim: true },
    phone: { type: String, trim: true },
  },
  { timestamps: true }
);

// Hash password before saving
MemberSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
MemberSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Remove password from JSON output
MemberSchema.methods.toJSON = function () {
  const memberObject = this.toObject();
  delete memberObject.password;
  return memberObject;
};

export default mongoose.model("Member", MemberSchema);
