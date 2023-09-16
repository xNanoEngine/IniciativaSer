import { Router } from "express";
import {
  createIniciativa,
  getIniciativa,
  updateIniciativa,
  deleteIniciativa,
  getIniciativas,
} from "../controllers/iniciativa.controller.js";

const router = Router();

// Routes
router.post("/", createIniciativa);
router.put("/:id", updateIniciativa);
router.delete("/:id", deleteIniciativa);
router.get("/", getIniciativas);
router.get("/:id", getIniciativa);

export default router;