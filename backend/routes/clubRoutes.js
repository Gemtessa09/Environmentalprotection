import { Router } from "express";
import {
  getClubs,
  getClub,
  createClub,
  updateClub,
  deleteClub,
  getFeaturedClubs,
} from "../controllers/clubController.js";
import auth from "../middleware/auth.js";

const router = Router();

router.get("/", getClubs);
router.get("/featured", getFeaturedClubs);
router.get("/:id", getClub);
router.post("/", auth, createClub);
router.put("/:id", auth, updateClub);
router.delete("/:id", auth, deleteClub);

export default router;
