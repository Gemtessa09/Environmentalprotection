import Member from "../models/Member.js";
import Task from "../models/Task.js";
import { authenticate, staffAndAdmin, adminOnly } from "../middleware/auth.js";

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

      const { name, department, phone, joinReason, photo, password } = req.body;

      const updateData = { name, department, phone, joinReason, photo };
      
      // If password is provided, it will be hashed by the pre-save hook if we use save(), 
      // but findByIdAndUpdate bypasses pre-save hooks. 
      // So we need to handle password update separately or use save().
      
      let member = await Member.findById(req.params.id);
      if (!member) {
        return res.status(404).json({ message: "Member not found" });
      }

      member.name = name || member.name;
      member.department = department || member.department;
      member.phone = phone || member.phone;
      member.joinReason = joinReason || member.joinReason;
      member.photo = photo || member.photo;

      if (password) {
        member.password = password; // Will be hashed by pre-save hook
      }

      await member.save();
      
      // Return without password
      const memberResponse = member.toJSON();

      res.json({
        message: "Member updated successfully",
        member: memberResponse
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

// Update member privilege (Admin only)
export const updateMemberPrivilege = [
  authenticate,
  adminOnly,
  async (req, res, next) => {
    try {
      const { role } = req.body;
      if (!["Member", "Staff", "Admin"].includes(role)) {
        return res.status(400).json({ message: "Invalid role" });
      }

      const member = await Member.findByIdAndUpdate(
        req.params.id,
        { role },
        { new: true }
      ).select("-password");

      if (!member) {
        return res.status(404).json({ message: "Member not found" });
      }

      res.json({ message: "Member privilege updated", member });
    } catch (err) {
      next(err);
    }
  }
];

// Update member schedule (Admin only)
export const updateMemberSchedule = [
  authenticate,
  adminOnly,
  async (req, res, next) => {
    try {
      const { schedule } = req.body;
      const member = await Member.findByIdAndUpdate(
        req.params.id,
        { schedule },
        { new: true }
      ).select("-password");

      if (!member) {
        return res.status(404).json({ message: "Member not found" });
      }

      res.json({ message: "Member schedule updated", member });
    } catch (err) {
      next(err);
    }
  }
];

// Get member performance (Admin or own)
export const getMemberPerformance = [
  authenticate,
  async (req, res, next) => {
    try {
      // Admin can see anyone's, Member can only see their own
      if (req.member.role !== "Admin" && req.member._id.toString() !== req.params.id) {
        return res.status(403).json({ message: "Access denied" });
      }

      const member = await Member.findById(req.params.id).select("-password");
      if (!member) {
        return res.status(404).json({ message: "Member not found" });
      }

      // Calculate performance based on tasks
      const totalTasks = await Task.countDocuments({ assignedTo: member._id });
      const completedTasks = await Task.countDocuments({ assignedTo: member._id, status: "Completed" });
      
      const performanceData = {
        ...member.performance,
        totalTasks,
        completedTasks,
        completionRate: totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0
      };

      res.json(performanceData);
    } catch (err) {
      next(err);
    }
  }
];

// Get overall members performance (Admin/Member)
export const getOverallPerformance = [
  authenticate,
  async (req, res, next) => {
    try {
      const members = await Member.find({ active: true }).select("name performance");
      
      // Aggregate task data for all members
      const performanceData = await Promise.all(members.map(async (member) => {
        const totalTasks = await Task.countDocuments({ assignedTo: member._id });
        const completedTasks = await Task.countDocuments({ assignedTo: member._id, status: "Completed" });
        return {
          id: member._id,
          name: member.name,
          totalTasks,
          completedTasks,
          completionRate: totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0
        };
      }));

      res.json(performanceData);
    } catch (err) {
      next(err);
    }
  }
];

// Upload profile photo
export const uploadProfilePhoto = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Please upload a file" });
    }

    const member = await Member.findById(req.member.id);
    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    // Store relative path
    member.photo = req.file.path.replace(/\\/g, "/");
    await member.save();

    res.json({
      message: "Photo uploaded successfully",
      photo: member.photo
    });
  } catch (err) {
    next(err);
  }
};
