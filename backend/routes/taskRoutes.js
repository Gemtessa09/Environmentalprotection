import { Router } from "express";
import { assignTask, getTasks, updateTaskStatus } from "../controllers/taskController.js";
import { authenticate, adminOnly } from "../middleware/auth.js";

const router = Router();

router.get("/", authenticate, getTasks);
router.post("/", authenticate, adminOnly, assignTask);
router.patch("/:id/status", authenticate, updateTaskStatus);

export default router;
