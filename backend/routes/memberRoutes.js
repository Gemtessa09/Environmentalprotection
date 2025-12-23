import { Router } from "express";
import {
  getMembers,
  createMember,
  getMemberById,
  updateMember,
  deleteMember,
  getRecentRegistrations
} from "../controllers/memberController.js";
import { authenticate, staffAndAdmin } from "../middleware/auth.js";

const router = Router();

// Public routes
router.get("/", getMembers);
router.post("/", createMember);

// Protected routes
router.get("/:id", authenticate, getMemberById);
router.put("/:id", updateMember);
router.delete("/:id", deleteMember);

// Staff/Admin routes
router.get("/admin/recent-registrations", getRecentRegistrations);

export default router;
