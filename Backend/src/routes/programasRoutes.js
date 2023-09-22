import { Router } from "express";
import {
  createPrograma,
  getPrograma,
  updatePrograma,
  deletePrograma,
  getProgramas,
} from "../controllers/programa.controller.js";

const router = Router();

// Routes
router.post("/", createPrograma);
router.put("/:id", updatePrograma);
router.delete("/:id", deletePrograma);
router.get("/", getProgramas);
router.get("/:id", getPrograma);

export default router;