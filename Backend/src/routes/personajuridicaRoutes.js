import { Router } from "express";
import {
  createPersonajuridica,
  getPersonajuridica,
  updatePersonajuridica,
  deletePersonajuridica,
  getPersonajuridicas,
} from "../controllers/personajuridica.controller.js";

const router = Router();

// Routes
router.post("/", createPersonajuridica);
router.put("/:id", updatePersonajuridica);
router.delete("/:id", deletePersonajuridica);
router.get("/", getPersonajuridicas);
router.get("/:id", getPersonajuridica);

export default router;