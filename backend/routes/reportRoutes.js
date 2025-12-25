import { Router } from "express";
import { authenticate, staffAndAdmin } from "../middleware/auth.js";
import { createReport, getAllReports, getPublicReports } from "../controllers/reportController.js";

const router = Router();

router.use(authenticate);

// Public reports for members
router.get("/public", getPublicReports);

// Staff and Admin routes
router.post("/", staffAndAdmin, createReport);
router.get("/", staffAndAdmin, getAllReports);

export default router;
