import express from "express";
import { auth } from "../middlewares/auth.middleware.js";
import {
    crearComentario,
    obtenerTodosLosComentarios,
    obtenerComentarioPorId,
    obtenerComentariosPorVehiculo,
    obtenerComentariosPorUsuario,
    eliminarComentario,
} from "../controllers/calificacion.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { comentarioSchema } from "../schemas/calificacion.schema.js";

const router = express.Router();

// Obtener todos los comentarios de un vehículo
router.get("/comentarios/", auth, obtenerTodosLosComentarios);

// Obtener todos los comentarios de un vehículo
router.get(
    "/comentarios/vehiculo/:id_vehiculo",
    auth,
    obtenerComentariosPorVehiculo
);

// Obtener todos los comentarios de un usuario
router.get("/comentarios/usuario/", auth, obtenerComentariosPorUsuario);

// Crear un nuevo comentario
router.post(
    "/comentarios",
    auth,
    validateSchema(comentarioSchema),
    crearComentario
);

// Eliminar un comentario por ID
router.delete("/comentarios/:id_comentario", auth, eliminarComentario);

export default router;
