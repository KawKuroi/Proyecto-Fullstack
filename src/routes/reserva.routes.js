import express from "express";
import { auth } from "../middlewares/auth.middleware.js";
import {
    crearReserva,
    obtenerTodasLasReservas,
    obtenerReservaPorId,
    obtenerReservasPorUsuario,
    obtenerReservasPorVehiculo,
    actualizarReserva,
    eliminarReserva,
} from "../controllers/reserva.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import {
    reservaSchema,
    actualizarReservaSchema,
} from "../schemas/reserva.schema.js";

const router = express.Router();

// Crear una nueva reserva
router.post("/reservas", auth, validateSchema(reservaSchema), crearReserva);

// Obtener todas las reservas
router.get("/reservas", auth, obtenerTodasLasReservas);

// Obtener una reserva por ID
router.get("/reservas/:id_reserva", auth, obtenerReservaPorId);

// Obtener reservas por usuario
router.get("/reservas/usuario/", auth, obtenerReservasPorUsuario);

// Obtener reservas por vehículo
router.get("/reservas/vehiculo/:id_vehiculo", auth, obtenerReservasPorVehiculo);

// Actualizar una reserva
router.put(
    "/reservas/:id_reserva",
    auth,
    validateSchema(actualizarReservaSchema),
    actualizarReserva
);

// Eliminar una reserva
router.delete("/reservas/:id_reserva", auth, eliminarReserva);

export default router;
