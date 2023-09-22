import { Router } from "express";
import {
  createLocalidadterritorio,
  getLocalidadterritorio,
  updateLocalidadterritorio,
  deleteLocalidadterritorio,
  getLocalidadesterritorio,
} from "../controllers/localidadterritorio.controller.js";

const router = Router();

// Routes
router.post("/", createLocalidadterritorio);
router.put("/:id", updateLocalidadterritorio);
router.delete("/:id", deleteLocalidadterritorio);
router.get("/", getLocalidadesterritorio);
router.get("/:id", getLocalidadterritorio);

export default router;