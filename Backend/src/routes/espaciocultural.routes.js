import { Router } from "express";
import {
  createEspacioCultural,
  getEspaciosCulturales,
  updateEspacioCultural,
  deleteEspacioCultural,
  getEspacioCultural,
} from "../controllers/espaciocultural.controller.js";

const router = Router();

// Routes
router.post("/", createEspacioCultural);
router.put("/:id", updateEspacioCultural);
router.delete("/:id", deleteEspacioCultural);
router.get("/", getEspaciosCulturales);
router.get("/:id", getEspacioCultural);

export default router;