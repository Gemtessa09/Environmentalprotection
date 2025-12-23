import Member from "../models/Member.js";
import { authenticate, staffAndAdmin } from "../middleware/auth.js";

// Get all members (public endpoint for viewing members)
export const getMembers = async (req, res, next) => {
  try {
    const members = await Member.find({ active: true })
      .select("-password")
      .sort({ createdAt: -1 });
    res.json(members);
  } catch (err) {
    next(err);
  }
};

// Create new member (public registration)
export const createMember = async (req, res, next) => {
  try {
    const { name, email, password, joinReason, department, phone } = req.body;

    // Check if member already exists
    const existingMember = await Member.findOne({ email });
    if (existingMember) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const member = new Member({
      name,
      email,
      password,
      role: "Member", // Default role for public registration
      joinReason,
      department,
      phone
    });

    await member.save();

    // Return member without password
    const memberResponse = member.toJSON();

    res.status(201).json({
      message: "Member registered successfully",
      member: memberResponse
    });
  } catch (err) {
    next(err);
  }
};

// Get member by ID (authenticated users)
export const getMemberById = async (req, res, next) => {
  try {
    const member = await Member.findById(req.params.id).select("-password");

    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    res.json(member);
  } catch (err) {
    next(err);
  }
};

// Update member (authenticated user can update their own profile)
export const updateMember = [
  authenticate,
  async (req, res, next) => {
    try {
      // Users can only update their own profile unless they're staff/admin
      if (req.member._id.toString() !== req.params.id && !["Staff", "Admin"].includes(req.member.role)) {
        return res.status(403).json({ message: "Access denied. Can only update own profile." });
      }

      const { name, department, phone, joinReason } = req.body;

      const member = await Member.findByIdAndUpdate(
        req.params.id,
        { name, department, phone, joinReason },
        { new: true, runValidators: true }
      ).select("-password");

      if (!member) {
        return res.status(404).json({ message: "Member not found" });
      }

      res.json({
        message: "Member updated successfully",
        member
      });
    } catch (err) {
      next(err);
    }
  }
];

// Delete member (admin only)
export const deleteMember = [
  authenticate,
  staffAndAdmin,
  async (req, res, next) => {
    try {
      const member = await Member.findByIdAndDelete(req.params.id);

      if (!member) {
        return res.status(404).json({ message: "Member not found" });
      }

      res.json({ message: "Member deleted successfully" });
    } catch (err) {
      next(err);
    }
  }
];

// Get recent member registrations (staff and admin only)
export const getRecentRegistrations = [
  authenticate,
  staffAndAdmin,
  async (req, res, next) => {
    try {
      const { days = 7 } = req.query;

      const startDate = new Date();
      startDate.setDate(startDate.getDate() - parseInt(days));

      const members = await Member.find({
        createdAt: { $gte: startDate }
      })
      .select("-password")
      .sort({ createdAt: -1 });

      res.json({
        count: members.length,
        members
      });
    } catch (err) {
      next(err);
    }
  }
];
