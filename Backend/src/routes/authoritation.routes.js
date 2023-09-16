import { Router } from "express";
import { tokenVerification } from "../controllers/authoritation.controller";

const router = Router();

// Routes
router.post("/", tokenVerification);

export default router;
