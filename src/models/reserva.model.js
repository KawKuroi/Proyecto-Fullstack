import { connectDB } from "../db.js";

class Reserva {
    // Crear una nueva reserva
    static async crear(reservaData) {
        const connection = await connectDB();
        const {
            id_usuario,
            id_vehiculo,
            fecha_inicio,
            fecha_fin
        } = reservaData;
        
        const [result] = await connection.execute(
            `INSERT INTO reservas (id_usuario, id_vehiculo, fecha_inicio, fecha_fin) 
            VALUES (?, ?, ?, ?)`,
            [id_usuario, id_vehiculo, fecha_inicio, fecha_fin]
        );

        return result;
    }

    // Obtener todas las reservas
    static async obtenerTodas() {
        const connection = await connectDB();
        const [rows] = await connection.execute(`SELECT * FROM reservas`);
        return rows;
    }

    // Obtener una reserva por ID
    static async obtenerPorId(id_reserva) {
        const connection = await connectDB();
        const [rows] = await connection.execute(
            `SELECT * FROM reservas WHERE id_reserva = ?`,
            [id_reserva]
        );
        return rows[0];
    }

    // Obtener todas las reservas de un usuario
    static async obtenerPorUsuario(id_usuario) {
        const connection = await connectDB();
        const [rows] = await connection.execute(
            `SELECT * FROM reservas WHERE id_usuario = ?`,
            [id_usuario]
        );
        return rows;
    }

    // Obtener todas las reservas de un vehículo
    static async obtenerPorVehiculo(id_vehiculo) {
        const connection = await connectDB();
        const [rows] = await connection.execute(
            `SELECT * FROM reservas WHERE id_vehiculo = ?`,
            [id_vehiculo]
        );
        return rows;
    }

    // Actualizar una reserva
    static async actualizar(id_reserva, reservaData) {
        const connection = await connectDB();
        const { estado, fecha_cancelacion, fecha_finalizacion } = reservaData;

        const [result] = await connection.execute(
            `UPDATE reservas SET estado = ?, fecha_cancelacion = ?, fecha_finalizacion = ? WHERE id_reserva = ?`,
            [estado, fecha_cancelacion, fecha_finalizacion, id_reserva]
        );

        return result.affectedRows > 0;
    }

    // Eliminar una reserva
    static async eliminar(id_reserva) {
        const connection = await connectDB();
        const [result] = await connection.execute(
            `DELETE FROM reservas WHERE id_reserva = ?`,
            [id_reserva]
        );

        return result.affectedRows > 0;
    }
}

export default Reserva;