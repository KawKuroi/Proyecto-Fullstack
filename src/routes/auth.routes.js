import { Router } from "express";
import { login, registro, logout } from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { loginSchema, registroSchema } from "../schemas/auth.schema.js";

const router = Router();

// Rutas de la aplicación
router.post("/registro", validateSchema(registroSchema), registro);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);

export default router;
