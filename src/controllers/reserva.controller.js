import Reserva from "../models/reserva.model.js";

// Crear una nueva reserva
export const crearReserva = async (req, res) => {
    const { id_usuario, id_vehiculo, fecha_inicio, fecha_fin } = req.body;
    try {
        const reservaCreada = await Reserva.crear({
            id_usuario,
            id_vehiculo,
            fecha_inicio,
            fecha_fin
        });
        res.status(201).json({
            message: "Reserva creada correctamente",
            id_reserva: reservaCreada.insertId
        });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(400).json({
            message: "Error al crear la reserva",
            error: error.message
        });
    }
};

// Obtener todas las reservas
export const obtenerTodasLasReservas = async (req, res) => {
    try {
        const reservas = await Reserva.obtenerTodas();
        res.json(reservas);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(400).json({
            message: "Error al obtener las reservas",
            error: error.message
        });
    }
};

// Obtener una reserva por su ID
export const obtenerReservaPorId = async (req, res) => {
    const { id_reserva } = req.params;
    try {
        const reserva = await Reserva.obtenerPorId(id_reserva);
        if (!reserva) {
            return res.status(404).json({ message: "Reserva no encontrada" });
        }
        res.json(reserva);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(400).json({
            message: "Error al obtener la reserva",
            error: error.message
        });
    }
};

// Obtener todas las reservas de un usuario
export const obtenerReservasPorUsuario = async (req, res) => {
    const { id_usuario } = req.params;
    try {
        const reservas = await Reserva.obtenerPorUsuario(id_usuario);
        if (reservas.length === 0) {
            return res.status(404).json({ message: "No se encontraron reservas para este usuario" });
        }
        res.json(reservas);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(400).json({
            message: "Error al obtener las reservas",
            error: error.message
        });
    }
};

// Obtener todas las reservas de un vehículo
export const obtenerReservasPorVehiculo = async (req, res) => {
    const { id_vehiculo } = req.params;
    try {
        const reservas = await Reserva.obtenerPorVehiculo(id_vehiculo);
        if (reservas.length === 0) {
            return res.status(404).json({ message: "No se encontraron reservas para este vehículo" });
        }
        res.json(reservas);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(400).json({
            message: "Error al obtener las reservas",
            error: error.message
        });
    }
};

// Actualizar una reserva
export const actualizarReserva = async (req, res) => {
    const { id_reserva } = req.params;
    const { estado, fecha_cancelacion, fecha_finalizacion } = req.body;
    try {
        const reservaActualizada = await Reserva.actualizar(id_reserva, {
            estado,
            fecha_cancelacion,
            fecha_finalizacion
        });
        if (!reservaActualizada) {
            return res.status(404).json({ message: "Reserva no encontrada" });
        }
        res.json({ message: "Reserva actualizada correctamente" });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(400).json({
            message: "Error al actualizar la reserva",
            error: error.message
        });
    }
};

// Eliminar una reserva
export const eliminarReserva = async (req, res) => {
    const { id_reserva } = req.params;
    try {
        const reservaEliminada = await Reserva.eliminar(id_reserva);
        if (!reservaEliminada) {
            return res.status(404).json({ message: "Reserva no encontrada" });
        }
        res.json({ message: "Reserva eliminada correctamente" });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(400).json({
            message: "Error al eliminar la reserva",
            error: error.message
        });
    }
};
