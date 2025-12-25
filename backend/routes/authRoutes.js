import { Router } from "express";
import jwt from "jsonwebtoken";
import { authenticate } from "../middleware/auth.js";
import Member from "../models/Member.js";

const router = Router();

// Register new member
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role, joinReason, department, phone } = req.body;

    // Check if member already exists
    const existingMember = await Member.findOne({ email });
    if (existingMember) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Default role is "Member", only allow "Staff" if specified by admin
    const memberRole = role === "Staff" ? "Staff" : "Member";

    const member = new Member({
      name,
      email,
      password,
      role: memberRole,
      joinReason,
      department,
      phone
    });

    await member.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: member._id, email: member.email, role: member.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      message: "Registration successful",
      member: {
        id: member._id,
        name: member.name,
        email: member.email,
        role: member.role,
        department: member.department,
        phone: member.phone,
        photo: member.photo
      },
      token
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find member by email
    const member = await Member.findOne({ email });
    if (!member) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check if account is active
    if (!member.active) {
      return res.status(401).json({ message: "Account is deactivated" });
    }

    // Check password
    const isPasswordValid = await member.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: member._id, email: member.email, role: member.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      member: {
        id: member._id,
        name: member.name,
        email: member.email,
        role: member.role,
        department: member.department,
        phone: member.phone,
        photo: member.photo
      },
      token
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
});

// Get current member profile
router.get("/profile", authenticate, async (req, res) => {
  try {
    const member = await Member.findById(req.member._id);
    res.json({ member });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update member profile
router.put("/profile", authenticate, async (req, res) => {
  try {
    const { name, department, phone, joinReason } = req.body;

    const member = await Member.findByIdAndUpdate(
      req.member._id,
      { name, department, phone, joinReason },
      { new: true, runValidators: true }
    );

    res.json({
      message: "Profile updated successfully",
      member
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;