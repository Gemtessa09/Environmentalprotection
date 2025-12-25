import { Router } from "express";
import { authenticate, adminOnly } from "../middleware/auth.js";
import { createFeedback, getAllFeedback } from "../controllers/feedbackController.js";

const router = Router();

router.use(authenticate);

// Member routes
router.post("/", createFeedback);

// Admin routes
router.get("/", adminOnly, getAllFeedback);

export default router;
