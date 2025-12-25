import { Router } from "express";
import { createNotice, getNotices, deleteNotice } from "../controllers/noticeController.js";
import { authenticate, adminOnly, staffAndAdmin } from "../middleware/auth.js";

const router = Router();

router.get("/", getNotices);
router.post("/", authenticate, staffAndAdmin, createNotice);
router.delete("/:id", authenticate, adminOnly, deleteNotice);

export default router;
