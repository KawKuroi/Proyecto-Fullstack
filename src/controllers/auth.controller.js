import User from "../models/usuario.model.js";
import bscrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

// Registrar usuarios
export const registro = async (req, res) => {
    // Se obtiene por metodo POST el nombre, correo y contraseña
    const { nombre, correo, contrasena } = req.body;
    try {
        // Se encripta la contraseña
        const contrasenaEncriptada = await bscrypt.hash(contrasena, 10);
        // Se crea el usuario a partir del modelo
        const newUser = await User.crear({
            nombre: nombre,
            correo: correo,
            contrasena: contrasenaEncriptada,
        });
        // Se genera un token con cookies
        const token = await createAccessToken({ id: newUser.id_usuario });
        res.cookie("token", token, {
            httpOnly: process.env.NODE_ENV !== "development",
            secure: true,
            sameSite: "none",
        });
        // Se imprime la info
        res.json({ message: "Usuario creado correctamente" });
        console.log("Usuario creado correctamente");
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(400).json({
            message: "Error al registrar el usuario",
            error: error.message,
        });
    }
};

// Loguear usuarios
export const login = async (req, res) => {
    // Se obtiene por metodo POST el correo y contraseña
    const { correo, contrasena } = req.body;
    try {
        // Se realiza una busqueda en la base de datos a partir del correo
        const usuarioEncontrado = await User.obtenerPorCorreo(correo);
        if (!usuarioEncontrado)
            return res.status(400).json({ message: "Correo incorrecto" });
        // Se compara la contraseña del usuario con la contraseña ingresada
        const contrasenaValida = await bscrypt.compare(
            contrasena,
            usuarioEncontrado.contrasena
        );
        if (!contrasenaValida) {
            return res.status(400).json({ message: "Contraseña incorrecta" });
        }
        // Se crea un token con cookies
        const token = await createAccessToken({
            id: usuarioEncontrado.id_usuario,
        });
        res.cookie("token", token, {
            httpOnly: process.env.NODE_ENV !== "development",
            secure: true,
            sameSite: "none",
        });
        // Se imprime la info
        res.json({ message: "El usuario ingresó correctamente" });
        console.log("El usuario ingresó correctamente");
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(400).json({
            message: "Error al ingresar el usuario",
            error: error.message,
        });
    }
};

// Des-Loguear
export const logout = async (req, res) => {
    // Simplemente se vacía la cookie
    res.cookie("token", "", {
        httpOnly: true,
        secure: true,
        expires: new Date(0),
    });
    res.json({ message: "Se cerró sesión correctamente" });
    console.log("Se cerró sesión correctamente");
};
