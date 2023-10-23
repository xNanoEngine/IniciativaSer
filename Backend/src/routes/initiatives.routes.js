import { Router } from "express";
import {
  createIniciativa,
  getIniciativa,
  updateIniciativa,
  deleteIniciativa,
  getIniciativas,
  getProgramas,
  getPrograma
} from "../controllers/initiatives.controller.js";
import checkAuth from "../middleware/checkAuth.js";
const router = Router();

// Routes
router.post("/", checkAuth, createIniciativa);
router.put("/:id", checkAuth, updateIniciativa);
router.delete("/:id", checkAuth, deleteIniciativa);
router.get("/", getIniciativas);
router.get("/:id", getIniciativa);
router.get("/programas", getProgramas);
router.get("/programa", getPrograma);

export default router;
