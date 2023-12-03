import { Router } from "express";
import {
    getData,
} from "../controllers/initiatives.controller.js";
const router = Router();

// Routes
router.get("/", getData);


export default router;
