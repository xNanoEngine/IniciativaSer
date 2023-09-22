import { Router } from "express";
import {
  createambitodominioarea,
  getambitodominioarea,
  deleteambitodominioarea,
  getambitodominioareas,
} from "../controllers/ambitodominioarea.controller.js";

const router = Router();

// Routes
router.post("/", createambitodominioarea);
router.delete("/:id", deleteambitodominioarea);
router.get("/", getambitodominioareas);
router.get("/:id", getambitodominioarea);

export default router;