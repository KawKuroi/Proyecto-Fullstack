import { connectDB } from "./db"; 

class Calificacion {
    static async crear(calificacionData) {
        const connection = await connectDB();
        const { id_reserva, calificacion, comentario } = calificacionData;
        const [result] = await connection.execute(
            `INSERT INTO calificaciones (id_reserva, calificacion, comentario) 
            VALUES (?, ?, ?)`,
            [id_reserva, calificacion, comentario]
        );
        return result;
    }

    static async obtenerPorReserva(id_reserva) {
        const connection = await connectDB();
        const [rows] = await connection.execute(
            `SELECT * FROM calificaciones WHERE id_reserva = ?`,
            [id_reserva]
        );
        return rows[0]; 
    }
}

export default Calificacion;
