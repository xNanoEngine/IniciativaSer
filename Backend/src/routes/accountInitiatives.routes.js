import { Router } from "express";
import { getAccountInitiatives, deleteIniciativa } from "../controllers/initiatives.controller.js";
import checkAuth from "../middleware/checkAuth.js";
const router = Router();

// Routes
router.get("/", getAccountInitiatives); 
router.patch("/:id", deleteIniciativa);

export default router;
