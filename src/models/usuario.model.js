import { connectDB } from "../db.js";

class Usuario {
    // Se conecta con la base de datos
    static async crear(usuarioData) {
        const connection = await connectDB();
        console.log("Conexion con usuario exitosa");
        const {
            nombre,
            correo,
            contrasena,
            tipo_usuario = "cliente",
        } = usuarioData;
        const [result] = await connection.execute(
            `INSERT INTO usuarios (nombre, correo, contrasena, tipo_usuario) VALUES (?, ?, ?, ?)`,
            [nombre, correo, contrasena, tipo_usuario]
        );
        const usuarioCreado = await this.obtenerPorCorreo(correo);
        return usuarioCreado;
    }
    // Esta funcion realiza una busqueda en la base de datos en la columna correo y devuelve un usuario
    static async obtenerPorCorreo(correo) {
        const connection = await connectDB();
        const [rows] = await connection.execute(
            `SELECT * FROM usuarios WHERE correo = ?`,
            [correo]
        );
        return rows[0];
    }

    // Esta funcion realiza una busqueda en la base de datos en la columna ID y devuelve un usuario
    static async obtenerPorId(id_usuario) {
        if (!id_usuario) {
            throw new Error("El id del usuario es necesario");
        }
        const connection = await connectDB();
        const [rows] = await connection.execute(
            `SELECT * FROM usuarios WHERE id_usuario = ?`,
            [id_usuario]
        );
        return rows[0]; // Retorna el primer resultado que coincide con el id_usuario
    }
}

export default Usuario;
