import { Router } from "express";
import { login, registro, logout } from "../controllers/auth.controller.js";

const router = Router();

// Rutas de la aplicación
router.post("/registro", registro);
router.post("/login", login);
router.post("/logout", logout);

export default router;
