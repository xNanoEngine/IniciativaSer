import { Router } from "express";
import {
  getAccount,
  createAccount,
  getAccounts,
  deleteAccount,
  updateAccount,
  login,
} from "../controllers/accounts.controller.js";
import checkAuth from "../middleware/checkAuth.js";
const router = Router();

// Routes
router.post("/", checkAuth, createAccount);
router.get("/", checkAuth, getAccounts);
router.put("/:id", checkAuth, updateAccount);
router.delete("/:id", checkAuth, deleteAccount);
router.get("/:id", checkAuth, getAccount);
router.post("/login", login);
export default router;
