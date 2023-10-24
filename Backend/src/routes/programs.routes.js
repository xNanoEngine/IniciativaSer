import { Router } from "express";
import {
  getProgramas,
  getPrograma
} from "../controllers/initiatives.controller.js";
const router = Router();

// Routes
router.get("/", getProgramas);
router.get("/:id", getPrograma);

export default router;
