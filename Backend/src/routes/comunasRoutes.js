import { Router } from "express";
import {
  createComuna,
  getComuna,
  updateComuna,
  deleteComuna,
  getComunas,
} from "../controllers/comuna.controller.js";

const router = Router();

// Routes
router.post("/", createComuna);
router.put("/:id", updateComuna);
router.delete("/:id", deleteComuna);
router.get("/", getComunas);
router.get("/:id", getComuna);

export default router;