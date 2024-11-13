import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import {
    login,
    registro,
    logout,
    profile,
} from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { loginSchema, registroSchema } from "../schemas/auth.schema.js";

const router = Router();

// Rutas de la aplicación
router.post("/registro", validateSchema(registroSchema), registro);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/profile", auth, profile);

export default router;
