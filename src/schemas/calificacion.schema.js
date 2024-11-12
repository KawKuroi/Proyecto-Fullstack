import { z } from "zod";

export const comentarioSchema = z.object({
    id_vehiculo: z.number().int().positive({
        message: "El id_vehiculo debe ser un número entero positivo",
    }),

    calificacion: z
        .number()
        .int()
        .min(1, { message: "La calificación debe ser entre 1 y 5" })
        .max(5, { message: "La calificación debe ser entre 1 y 5" }),

    comentario: z
        .string()
        .max(500, {
            message: "El comentario no puede tener más de 500 caracteres",
        })
        .optional(),
});
