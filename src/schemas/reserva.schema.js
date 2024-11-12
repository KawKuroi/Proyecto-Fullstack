import { z } from "zod";

export const reservaSchema = z.object({
    id_vehiculo: z.number().int().positive({
        message: "El id_vehiculo debe ser un número entero positivo",
    }),

    fecha_inicio: z.string({
        message: "La fecha de inicio debe ser una fecha válida",
    }),

    fecha_fin: z.string({
        message: "La fecha de inicio debe ser una fecha válida",
    }),
});

export const actualizarReservaSchema = z.object({
    estado: z
        .enum(
            [
                "Pendiente",
                "Confirmada",
                "Cancelada",
                "En Proceso",
                "Finalizada",
            ],
            {
                message:
                    "Estado debe ser uno de 'Pendiente', 'Confirmada', 'Cancelada', 'En Proceso', 'Finalizada'",
            }
        )
        .optional(),

    fecha_cancelacion: z.string().optional(),
    fecha_finalizacion: z.string().optional(),
});
