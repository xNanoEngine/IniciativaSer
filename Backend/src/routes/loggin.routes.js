import { Router } from "express";
import { loggin } from "../controllers/loggin.controller.js";

const router = Router();

// Routes
router.post("/", loggin);

export default router;
