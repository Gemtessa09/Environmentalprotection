import { Router } from "express";
import { authenticate, adminOnly } from "../middleware/auth.js";
import Member from "../models/Member.js";
import Club from "../models/Club.js";

const router = Router();

// Apply authentication and admin authorization to all routes
router.use(authenticate);
router.use(adminOnly);

// Get all system statistics
router.get("/stats", async (req, res) => {
  try {
    const totalMembers = await Member.countDocuments();
    const activeMembers = await Member.countDocuments({ active: true });
    const staffMembers = await Member.countDocuments({ role: "Staff" });
    const adminMembers = await Member.countDocuments({ role: "Admin" });
    const totalClubs = await Club.countDocuments();
    const activeClubs = await Club.countDocuments({ active: true });

    // Recent registrations (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const recentRegistrations = await Member.countDocuments({
      createdAt: { $gte: thirtyDaysAgo }
    });

    res.json({
      totalMembers,
      activeMembers,
      staffMembers,
      adminMembers,
      totalClubs,
      activeClubs,
      recentRegistrations,
      inactiveMembers: totalMembers - activeMembers,
      inactiveClubs: totalClubs - activeClubs
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get all members (admin view)
router.get("/members", async (req, res) => {
  try {
    const { page = 1, limit = 10, role, active, search } = req.query;

    let query = {};

    if (role) query.role = role;
    if (active !== undefined) query.active = active === "true";
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { department: { $regex: search, $options: "i" } }
      ];
    }

    const members = await Member.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Member.countDocuments(query);

    res.json({
      members,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update member role/status
router.put("/members/:id", async (req, res) => {
  try {
    const { role, active, department, phone } = req.body;

    const member = await Member.findByIdAndUpdate(
      req.params.id,
      { role, active, department, phone },
      { new: true, runValidators: true }
    );

    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    res.json({
      message: "Member updated successfully",
      member
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete member
router.delete("/members/:id", async (req, res) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id);

    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    res.json({ message: "Member deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get all clubs (admin view)
router.get("/clubs", async (req, res) => {
  try {
    const { page = 1, limit = 10, active, search } = req.query;

    let query = {};

    if (active !== undefined) query.active = active === "true";
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { university: { $regex: search, $options: "i" } }
      ];
    }

    const clubs = await Club.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Club.countDocuments(query);

    res.json({
      clubs,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update club status
router.put("/clubs/:id", async (req, res) => {
  try {
    const { active, description } = req.body;

    const club = await Club.findByIdAndUpdate(
      req.params.id,
      { active, description },
      { new: true, runValidators: true }
    );

    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }

    res.json({
      message: "Club updated successfully",
      club
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Create staff member (admin only)
router.post("/create-staff", async (req, res) => {
  try {
    const { name, email, password, department, phone } = req.body;

    // Check if member already exists
    const existingMember = await Member.findOne({ email });
    if (existingMember) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const member = new Member({
      name,
      email,
      password,
      role: "Staff",
      department,
      phone,
      joinReason: "Created by Admin"
    });

    await member.save();

    res.status(201).json({
      message: "Staff member created successfully",
      member: {
        id: member._id,
        name: member.name,
        email: member.email,
        role: member.role,
        department: member.department,
        phone: member.phone
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update member/staff (Admin only)
router.put("/members/:id", async (req, res) => {
  try {
    const { name, email, role, department, phone, active } = req.body;
    const member = await Member.findById(req.params.id);

    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    // Prevent changing own role if not careful, but admin can do anything usually.
    // Let's allow updating fields.
    if (name) member.name = name;
    if (email) member.email = email;
    if (role) member.role = role;
    if (department) member.department = department;
    if (phone) member.phone = phone;
    if (typeof active !== 'undefined') member.active = active;

    await member.save();

    res.json({ message: "Member updated successfully", member });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete member/staff (Admin only)
router.delete("/members/:id", async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    await Member.findByIdAndDelete(req.params.id);
    res.json({ message: "Member deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;