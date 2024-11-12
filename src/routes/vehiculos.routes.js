import express from 'express';
import {
    crearVehiculo,
    obtenerVehiculoPorId,
    obtenerTodosVehiculos,
    actualizarVehiculo,
    eliminarVehiculo
} from "../controllers/vehiculo.controller.js";

const router = express.Router();

router.get('/vehiculos', obtenerTodosVehiculos);
router.get('/vehiculos/:id_vehiculo', obtenerVehiculoPorId);
router.post('/vehiculos', crearVehiculo);
router.put('/vehiculos/:id_vehiculo', actualizarVehiculo);
router.delete('/vehiculos/:id_vehiculo', eliminarVehiculo);

export default router;