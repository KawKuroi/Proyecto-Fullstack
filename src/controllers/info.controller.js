import User from "../models/usuario.model.js";

// Mostrar info de usuario actual
export const profile = async (req, res) => {
    const usuarioEncontrado = await User.obtenerPorId(req.user.id);
    if (!usuarioEncontrado)
        return res.status(400).json({ message: "Usuario no encontrado" });
    return res.json(usuarioEncontrado);
};
