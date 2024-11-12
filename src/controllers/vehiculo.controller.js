import Vehiculo from "../models/vehiculo.model.js";

// Crear un vehículo
export const crearVehiculo = async (req, res) => {
    const { marca, modelo, tipo, precio_diario, descripcion, disponibilidad } = req.body;
    try {
        // Crear el vehículo utilizando el modelo
        const vehiculoCreado = await Vehiculo.crear({
            marca,
            modelo,
            tipo,
            precio_diario,
            descripcion,
            disponibilidad
        });
        res.status(201).json({
            message: "Vehículo creado correctamente",
            id_vehiculo: vehiculoCreado.insertId
        });
        console.log("Vehículo creado correctamente");
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(400).json({
            message: "Error al crear el vehículo",
            error: error.message
        });
    }
};

// Obtener un vehículo por su ID
export const obtenerVehiculoPorId = async (req, res) => {
    const { id_vehiculo } = req.params;
    try {
        // Obtener el vehículo utilizando el modelo
        const vehiculo = await Vehiculo.obtenerPorId(id_vehiculo);
        if (!vehiculo) {
            return res.status(404).json({ message: "Vehículo no encontrado" });
        }
        res.json(vehiculo);
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(400).json({
            message: "Error al obtener el vehículo",
            error: error.message
        });
    }
};

// Obtener todos los vehículos
export const obtenerTodosVehiculos = async (req, res) => {
    try {
        // Obtener todos los vehículos utilizando el modelo
        const vehiculos = await Vehiculo.obtenerTodos();
        res.json(vehiculos);
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(400).json({
            message: "Error al obtener los vehículos",
            error: error.message
        });
    }
};

// Actualizar un vehículo por su ID
export const actualizarVehiculo = async (req, res) => {
    const { id_vehiculo } = req.params;
    const { marca, modelo, tipo, precio_diario, descripcion, disponibilidad } = req.body;
    try {
        // Verificar si el vehículo existe
        const vehiculoExistente = await Vehiculo.obtenerPorId(id_vehiculo);
        if (!vehiculoExistente) {
            return res.status(404).json({ message: "Vehículo no encontrado" });
        }

        // Actualizar el vehículo utilizando el modelo
        const result = await Vehiculo.actualizar(id_vehiculo, {
            marca,
            modelo,
            tipo,
            precio_diario,
            descripcion,
            disponibilidad
        });

        if (result.affectedRows === 0) {
            return res.status(400).json({ message: "No se pudo actualizar el vehículo" });
        }

        res.json({ message: "Vehículo actualizado correctamente" });
        console.log("Vehículo actualizado correctamente");
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(400).json({
            message: "Error al actualizar el vehículo",
            error: error.message
        });
    }
};

// Eliminar un vehículo por su ID
export const eliminarVehiculo = async (req, res) => {
    const { id_vehiculo } = req.params;
    try {
        // Verificar si el vehículo existe
        const vehiculoExistente = await Vehiculo.obtenerPorId(id_vehiculo);
        if (!vehiculoExistente) {
            return res.status(404).json({ message: "Vehículo no encontrado" });
        }

        // Eliminar el vehículo utilizando el modelo
        const result = await Vehiculo.eliminar(id_vehiculo);

        if (result.affectedRows === 0) {
            return res.status(400).json({ message: "No se pudo eliminar el vehículo" });
        }

        res.json({ message: "Vehículo eliminado correctamente" });
        console.log("Vehículo eliminado correctamente");
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(400).json({
            message: "Error al eliminar el vehículo",
            error: error.message
        });
    }
};