import { connectDB } from "../db.js";

class Vehiculo {
    // Crear un vehículo
    static async crear(vehiculoData) {
        const connection = await connectDB();
        const {
            marca,
            modelo,
            tipo,
            precio_diario,
            descripcion,
            disponibilidad = true,
        } = vehiculoData;

        const [result] = await connection.execute(
            `INSERT INTO vehiculos (marca, modelo, tipo, precio_diario, descripcion, disponibilidad) 
            VALUES (?, ?, ?, ?, ?, ?)`,
            [marca, modelo, tipo, precio_diario, descripcion, disponibilidad]
        );

        console.log("Vehículo creado correctamente");
        return result;
    }

    // Obtener un vehículo por su ID
    static async obtenerPorId(id_vehiculo) {
        const connection = await connectDB();
        const [rows] = await connection.execute(
            `SELECT * FROM vehiculos WHERE id_vehiculo = ?`,
            [id_vehiculo]
        );
        return rows[0];  // Retornamos el primer (y único) elemento
    }

    // Obtener todos los vehículos
    static async obtenerTodos() {
        const connection = await connectDB();
        const [rows] = await connection.execute(`SELECT * FROM vehiculos`);
        return rows;
    }

    // Actualizar un vehículo por su ID
    static async actualizar(id_vehiculo, vehiculoData) {
        const connection = await connectDB();
        const {
            marca,
            modelo,
            tipo,
            precio_diario,
            descripcion,
            disponibilidad,
        } = vehiculoData;

        const [result] = await connection.execute(
            `UPDATE vehiculos SET marca = ?, modelo = ?, tipo = ?, precio_diario = ?, descripcion = ?, disponibilidad = ? WHERE id_vehiculo = ?`,
            [marca, modelo, tipo, precio_diario, descripcion, disponibilidad, id_vehiculo]
        );

        return result;
    }

    // Eliminar un vehículo por su ID
    static async eliminar(id_vehiculo) {
        const connection = await connectDB();
        const [result] = await connection.execute(
            `DELETE FROM vehiculos WHERE id_vehiculo = ?`,
            [id_vehiculo]
        );

        return result;
    }
}

export default Vehiculo;