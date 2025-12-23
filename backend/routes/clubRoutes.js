import { Router } from "express";
import {
  getClubs,
  getClub,
  createClub,
  updateClub,
  deleteClub,
  getFeaturedClubs,
} from "../controllers/clubController.js";
import { apiKeyAuth } from "../middleware/auth.js";

const router = Router();

router.get("/", getClubs);
router.get("/featured", getFeaturedClubs);
router.get("/:id", getClub);
router.post("/", apiKeyAuth, createClub);
router.put("/:id", apiKeyAuth, updateClub);
router.delete("/:id", apiKeyAuth, deleteClub);

export default router;
