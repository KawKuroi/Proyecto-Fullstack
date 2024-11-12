import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

// Verifica si el usuario está autenticado
export const auth = (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token)
            return res
                .status(401)
                .json({ message: "No token, acceso deneagado" });

        jwt.verify(token, TOKEN_SECRET, (error, user) => {
            if (error) {
                return res.status(401).json({ message: "Token no valido" });
            }
            req.user = user;
            next();
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
