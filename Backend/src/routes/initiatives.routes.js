import { Router } from "express";
import {
  createIniciativa,
  getIniciativa,
  updateIniciativa,
  deleteIniciativa,
  getIniciativas,
} from "../controllers/initiatives.controller.js";
import checkAuth from "../middleware/checkAuth.js";
const router = Router();

// Routes
router.post("/", checkAuth, createIniciativa);
router.put("/:id", checkAuth, updateIniciativa);
router.patch("/:id", checkAuth, deleteIniciativa);
router.get("/", getIniciativas);
router.get("/:id", getIniciativa);

export default router;
