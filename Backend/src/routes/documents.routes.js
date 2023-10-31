import { Router } from "express";
import {
  getDocumentos,
  getDocumento
} from "../controllers/initiatives.controller.js";
const router = Router();

// Routes
router.get("/", getDocumentos);
router.get("/:id", getDocumento);

export default router;
