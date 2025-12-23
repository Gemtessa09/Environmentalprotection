import jwt from "jsonwebtoken";
import Member from "../models/Member.js";

// JWT Authentication middleware
export const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const member = await Member.findById(decoded.id);

    if (!member) {
      return res.status(401).json({ message: "Invalid token. Member not found." });
    }

    if (!member.active) {
      return res.status(401).json({ message: "Account is deactivated." });
    }

    req.member = member;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token." });
  }
};

// Role-based authorization middleware
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.member) {
      return res.status(401).json({ message: "Authentication required." });
    }

    if (!roles.includes(req.member.role)) {
      return res.status(403).json({
        message: `Access denied. ${req.member.role} role required.`,
        requiredRoles: roles
      });
    }

    next();
  };
};

// Admin only middleware
export const adminOnly = authorize("Admin");

// Staff and Admin middleware
export const staffAndAdmin = authorize("Staff", "Admin");

// Legacy API key auth (for backward compatibility)
export const apiKeyAuth = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};
