import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import reservaRoutes from "./routes/reserva.routes.js";
import vehiculosRoutes from "./routes/vehiculos.routes.js";
import calificacionRoutes from "./routes/calificacion.routes.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json())
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", reservaRoutes);
app.use("/api", vehiculosRoutes);
app.use("/api", calificacionRoutes);

export default app;