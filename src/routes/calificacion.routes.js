import express from 'express';
import {
    crearComentario,
    obtenerTodosLosComentarios,
    obtenerComentarioPorId,
    obtenerComentariosPorVehiculo,
    obtenerComentariosPorUsuario,
    eliminarComentario
} from "../controllers/calificacion.controller.js";

const router = express.Router();

// Obtener todos los comentarios de un vehículo
router.get('/comentarios/', obtenerTodosLosComentarios);

// Obtener todos los comentarios de un vehículo
router.get('/comentarios/vehiculo/:id_vehiculo', obtenerComentariosPorVehiculo);

// Obtener todos los comentarios de un usuario
router.get('/comentarios/usuario/:id_usuario', obtenerComentariosPorUsuario);

// Crear un nuevo comentario
router.post('/comentarios', crearComentario);

// Eliminar un comentario por ID
router.delete('/comentarios/:id_comentario', eliminarComentario);

export default router;
