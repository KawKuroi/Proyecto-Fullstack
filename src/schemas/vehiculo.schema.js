import { z } from "zod";

// Schema para crear y actualizar vehículos
export const vehiculoSchema = z.object({
    marca: z
        .string({
            required_error: "La marca es requerida",
        })
        .min(2, {
            message: "La marca debe tener al menos 2 caracteres",
        })
        .max(50, {
            message: "La marca debe tener como máximo 50 caracteres",
        }),

    modelo: z
        .string({
            required_error: "El modelo es requerido",
        })
        .min(2, {
            message: "El modelo debe tener al menos 2 caracteres",
        })
        .max(50, {
            message: "El modelo debe tener como máximo 50 caracteres",
        }),

    tipo: z
        .string({
            required_error: "El tipo es requerido",
        })
        .min(3, {
            message: "El tipo debe tener al menos 3 caracteres",
        })
        .max(30, {
            message: "El tipo debe tener como máximo 30 caracteres",
        }),

    precio_diario: z
        .number({
            required_error: "El precio diario es requerido",
        })
        .positive({
            message: "El precio diario debe ser un número positivo",
        })
        .min(1, {
            message: "El precio diario debe ser al menos 1",
        }),

    descripcion: z
        .string({
            required_error: "La descripción es requerida",
        })
        .min(10, {
            message: "La descripción debe tener al menos 10 caracteres",
        })
        .max(500, {
            message: "La descripción debe tener como máximo 500 caracteres",
        }),

    disponibilidad: z
        .boolean({
            required_error: "La disponibilidad es requerida",
        }),
});