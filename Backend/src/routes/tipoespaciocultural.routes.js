import { Router } from "express";
import {
  createTipoespaciocultural,
  getTiposespaciocultural,
  updateTipoespaciocultural,
  deleteTipoespaciocultural,
  getTipoespaciocultural,
} from "../controllers/tipoespaciocultural.controller.js";

const router = Router();

// Routes
router.post("/", createTipoespaciocultural);
router.put("/:tipo", updateTipoespaciocultural);
router.delete("/:tipo", deleteTipoespaciocultural);
router.get("/", getTiposespaciocultural);
router.get("/:tipo", getTipoespaciocultural);

export default router;