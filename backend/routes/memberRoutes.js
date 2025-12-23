import { Router } from "express";
import { getMembers, createMember } from "../controllers/memberController.js";

const router = Router();

router.get("/", getMembers);
router.post("/", createMember);

export default router;
