import { connectDB } from "../db.js";

class Reserva {
    static async crear(reservaData) {
        const connection = await connectDB();
        const {
            id_usuario,
            id_vehiculo,
            fecha_inicio,
            fecha_fin,
            estado = "Pendiente",
        } = reservaData;
        const [result] = await connection.execute(
            `INSERT INTO reservas (id_usuario, id_vehiculo, fecha_inicio, fecha_fin, estado) 
            VALUES (?, ?, ?, ?, ?)`,
            [id_usuario, id_vehiculo, fecha_inicio, fecha_fin, estado]
        );
        console.log("Conexion con reserva exitosa");
        return result;
    }

    static async obtenerPorId(id_reserva) {
        const connection = await connectDB();
        const [rows] = await connection.execute(
            `SELECT * FROM reservas WHERE id_reserva = ?`,
            [id_reserva]
        );
        return rows[0];
    }

    static async obtenerPorUsuario(id_usuario) {
        const connection = await connectDB();
        const [rows] = await connection.execute(
            `SELECT * FROM reservas WHERE id_usuario = ?`,
            [id_usuario]
        );
        return rows;
    }
}

export default Reserva;
