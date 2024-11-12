import express from "express";
import {
    crearVehiculo,
    obtenerVehiculoPorId,
    obtenerTodosVehiculos,
    actualizarVehiculo,
    eliminarVehiculo,
} from "../controllers/vehiculo.controller.js";

const router = express.Router();

// Ver todos los vehiculos
router.get("/vehiculos", obtenerTodosVehiculos);

// Ver un vehiculo según su ID
router.get("/vehiculos/:id_vehiculo", obtenerVehiculoPorId);

// Crear vehiculos
router.post("/vehiculos", crearVehiculo);

// Actualizar vehiculos
router.put("/vehiculos/:id_vehiculo", actualizarVehiculo);

// Eliminar vehiculos
router.delete("/vehiculos/:id_vehiculo", eliminarVehiculo);

export default router;
