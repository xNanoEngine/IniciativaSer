import { Router } from "express";
import {
  createPersonanatural,
  getPersonanatural,
  updatePersonanatural,
  deletePersonanatural,
  getPersonanaturals,
} from "../controllers/personanatural.controller.js";

const router = Router();

// Routes
router.post("/", createPersonanatural);
router.put("/:id", updatePersonanatural);
router.delete("/:id", deletePersonanatural);
router.get("/", getPersonanaturals);
router.get("/:id", getPersonanatural);

export default router;