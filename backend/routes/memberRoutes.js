import { Router } from "express";
import {
  getMembers,
  createMember,
  getMemberById,
  updateMember,
  deleteMember,
  getRecentRegistrations,
  updateMemberPrivilege,
  updateMemberSchedule,
  getMemberPerformance,
  getOverallPerformance,
  uploadProfilePhoto
} from "../controllers/memberController.js";
import { authenticate, staffAndAdmin } from "../middleware/auth.js";
import upload from "../middleware/upload.js";

const router = Router();

// Public routes
router.get("/", getMembers);
router.post("/", createMember);

// Protected routes
router.post("/upload-photo", authenticate, upload.single("photo"), uploadProfilePhoto);
router.get("/:id", authenticate, getMemberById);
router.put("/:id", updateMember);
router.delete("/:id", deleteMember);

// Staff/Admin routes
router.get("/admin/recent-registrations", getRecentRegistrations);

// New Admin/Feature routes
router.put("/:id/privilege", updateMemberPrivilege);
router.put("/:id/schedule", updateMemberSchedule);
router.get("/:id/performance", getMemberPerformance);
router.get("/performance/overall", getOverallPerformance);

export default router;
