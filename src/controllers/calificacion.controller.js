import Comentario from "../models/calificacion.model.js";

// Crear un comentario
export const crearComentario = async (req, res) => {
    const { id_usuario, id_vehiculo, calificacion, comentario } = req.body;
    try {
        const comentarioCreado = await Comentario.crear({
            id_usuario,
            id_vehiculo,
            calificacion,
            comentario
        });
        res.status(201).json({
            message: "Comentario creado correctamente",
            id_comentario: comentarioCreado.insertId
        });
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(400).json({
            message: "Error al crear el comentario",
            error: error.message
        });
    }
};

// Obtiene todas las comentarios
export const obtenerTodosLosComentarios = async (req, res) => {
    try {
        const comentarios = await Comentario.obtenerTodas();
        res.json(comentarios);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(400).json({
            message: "Error al obtener las comentarios",
            error: error.message
        });
    }
};

// Obtener comentario por su ID
export const obtenerComentarioPorId = async (req, res) => {
    const { id_comentario } = req.params;
    try {
        const comentario = await Comentario.obtenerPorId(id_comentario);
        if (!comentario) {
            return res.status(404).json({ message: "Comentario no encontrado" });
        }
        res.json(comentario);
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(400).json({
            message: "Error al obtener el comentario",
            error: error.message
        });
    }
};

// Obtener todos los comentarios de un vehículo
export const obtenerComentariosPorVehiculo = async (req, res) => {
    const { id_vehiculo } = req.params;
    try {
        const comentarios = await Comentario.obtenerPorVehiculo(id_vehiculo);
        res.json(comentarios);
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(400).json({
            message: "Error al obtener los comentarios del vehículo",
            error: error.message
        });
    }
};

// Obtener todos los comentarios de un usuario
export const obtenerComentariosPorUsuario = async (req, res) => {
    const { id_usuario } = req.params;
    try {
        const comentarios = await Comentario.obtenerPorUsuario(id_usuario);
        res.json(comentarios);
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(400).json({
            message: "Error al obtener los comentarios del usuario",
            error: error.message
        });
    }
};

// Eliminar un comentario por su ID
export const eliminarComentario = async (req, res) => {
    const { id_comentario } = req.params;
    try {
        const result = await Comentario.eliminar(id_comentario);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Comentario no encontrado" });
        }
        res.json({ message: "Comentario eliminado correctamente" });
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(400).json({
            message: "Error al eliminar el comentario",
            error: error.message
        });
    }
};
