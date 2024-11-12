import mysql from "mysql2/promise";  

// Conexion con DB mysql
export const connectDB = async () => {
    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            database: "proyecto",
            user: "root",
            password: "",
        });
        return connection; 
    } catch (error) {
        console.error("Error en la conexión a la base de datos:", error);
    }
};

export default connectDB