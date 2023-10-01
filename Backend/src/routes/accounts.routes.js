import { Router } from "express";

import {
  getAccount,
  createAccount,
  getAccounts,
  deleteAccount,
  updateAccount,
  login,
} from "../controllers/accounts.controller.js";

const router = Router();

// Routes
router.post("/", createAccount);
router.get("/", getAccounts);
router.put("/:id", updateAccount);
router.delete("/:id", deleteAccount);
router.get("/:id", getAccount);
router.post("/login", login);
export default router;
