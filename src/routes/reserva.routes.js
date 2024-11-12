import express from 'express';
import {
    crearReserva,
    obtenerTodasLasReservas,
    obtenerReservaPorId,
    obtenerReservasPorUsuario,
    obtenerReservasPorVehiculo,
    actualizarReserva,
    eliminarReserva
} from "../controllers/reserva.controller.js";

const router = express.Router();

// Crear una nueva reserva
router.post('/reservas', crearReserva);

// Obtener todas las reservas
router.get('/reservas', obtenerTodasLasReservas); 

// Obtener una reserva por ID                    
router.get('/reservas/:id_reserva', obtenerReservaPorId); 

// Obtener reservas por usuario
router.get('/reservas/usuario/:id_usuario', obtenerReservasPorUsuario);  

// Obtener reservas por vehículo
router.get('/reservas/vehiculo/:id_vehiculo', obtenerReservasPorVehiculo);  

// Actualizar una reserva
router.put('/reservas/:id_reserva', actualizarReserva);

// Eliminar una reserva
router.delete('/reservas/:id_reserva', eliminarReserva);  

export default router;