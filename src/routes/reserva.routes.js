import { Router } from "express";
import { auth } from "../middlewares/validateToken.js";
import { profile } from "../controllers/info.controller.js";

const router = Router();

router.get("/profile", auth, profile);

export default router;