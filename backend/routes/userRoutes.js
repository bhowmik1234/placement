import express from "express";
import { login, register, logout, getUser, updateUser, getStudent } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/getuser", isAuthenticated, getUser);
router.post("/update-detail", isAuthenticated, updateUser);
router.get("/getstudent", isAuthenticated, getStudent);

export default router;
