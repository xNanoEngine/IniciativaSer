import { Router } from "express";

import { 
    getAccount,
    createAccount,
    getAccounts,
    deleteAccount,
    updateAccount
 } from "../controllers/cuentas.controller.js";

const router = Router();

// Routes
router.post("/", createAccount);
router.get("/", getAccount);
router.put("/:id", updateAccount);
router.delete("/:id", deleteAccount);
router.get("/:id", getAccount);

export default router;