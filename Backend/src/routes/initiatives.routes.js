import { Router } from "express";
import {
  createIniciativa,
  getIniciativa,
  updateIniciativa,
  getIniciativas,
} from "../controllers/initiatives.controller.js";
import checkAuth from "../middleware/checkAuth.js";
import { updateIniciativa_ } from "../persintence/repository/initiatives.repository.js";
const router = Router();

// Routes
router.post("/", checkAuth, createIniciativa);
router.put("/:id", checkAuth, updateIniciativa_);
router.get("/", getIniciativas);
router.get("/:id", getIniciativa);

export default router;
