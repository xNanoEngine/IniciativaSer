import { Router } from "express";
import {
  createDocumento,
  getDocumento,
  updateDocumento,
  deleteDocumento,
  getDocumentos,
} from "../controllers/documento.controller.js";

const router = Router();

// Routes
router.post("/", createDocumento);
router.put("/:id", updateDocumento);
router.delete("/:id", deleteDocumento);
router.get("/", getDocumentos);
router.get("/:id", getDocumento);

export default router;