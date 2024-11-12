import { connectDB } from "../db.js";

class Comentario {
    // Crear un comentario
    static async crear(comentarioData) {
        const connection = await connectDB();
        const { id_usuario, id_vehiculo, calificacion, comentario } = comentarioData;
        
        const [result] = await connection.execute(
            `INSERT INTO comentarios (id_usuario, id_vehiculo, calificacion, comentario) 
            VALUES (?, ?, ?, ?)`,
            [id_usuario, id_vehiculo, calificacion, comentario]
        );

        console.log("Comentario creado correctamente");
        return result;
    }

    // Obtener todas las comentarios
    static async obtenerTodas() {
        const connection = await connectDB();
        const [rows] = await connection.execute(`SELECT * FROM comentarios`);
        return rows;
    }

    // Obtener un comentario por su ID
    static async obtenerPorId(id_comentario) {
        const connection = await connectDB();
        const [rows] = await connection.execute(
            `SELECT * FROM comentarios WHERE id_comentario = ?`,
            [id_comentario]
        );
        return rows[0];  // Retornamos el primer (y único) elemento
    }

    // Obtener todos los comentarios de un vehículo
    static async obtenerPorVehiculo(id_vehiculo) {
        const connection = await connectDB();
        const [rows] = await connection.execute(
            `SELECT c.id_comentario, u.nombre AS usuario, c.calificacion, c.comentario, c.fecha_comentario
            FROM comentarios c
            JOIN usuarios u ON c.id_usuario = u.id_usuario
            WHERE c.id_vehiculo = ?`,
            [id_vehiculo]
        );
        return rows;
    }

    // Obtener todos los comentarios de un usuario
    static async obtenerPorUsuario(id_usuario) {
        const connection = await connectDB();
        const [rows] = await connection.execute(
            `SELECT v.marca, v.modelo, c.calificacion, c.comentario, c.fecha_comentario
            FROM comentarios c
            JOIN vehiculos v ON c.id_vehiculo = v.id_vehiculo
            WHERE c.id_usuario = ?`,
            [id_usuario]
        );
        return rows;
    }

    // Eliminar un comentario por su ID
    static async eliminar(id_comentario) {
        const connection = await connectDB();
        const [result] = await connection.execute(
            `DELETE FROM comentarios WHERE id_comentario = ?`,
            [id_comentario]
        );
        return result;
    }
}

export default Comentario;