import { Router } from "express";
import {
  createObjetivo,
  getObjetivos,
  updateObjetivo,
  deleteObjetivo,
  getObjetivo,
} from "../controllers/objetivo.controller.js";

const router = Router();

// Routes
router.post("/", createObjetivo);
router.put("/:id", updateObjetivo);
router.delete("/:id", deleteObjetivo);
router.get("/", getObjetivos);
router.get("/:id", getObjetivo);

export default router;