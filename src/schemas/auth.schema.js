import { z } from "zod";

export const registroSchema = z.object({
    nombre: z
        .string({
            required_errror: "Username Requerida",
        })
        .min(3, {
            message: "El nombre debe tener mínimo 3 caracteres",
        })
        .max(25, {
            message: "El nombre debe tener máximo 25 caracteres",
        }),

    correo: z
        .string({
            required_errror: "Email Requerida",
        })
        .email({
            message: "invalid Email",
        }),

    contrasena: z
        .string({
            required_errror: "Contraseña Requerida",
        })
        .min(6, {
            message: "La contraseña debe tener mínimo 6 caracteres",
        })
        .max(25, {
            message: "La contraseña debe tener máximo 25 caracteres",
        }),
});

export const loginSchema = z.object({
    correo: z
        .string({
            required_errror: "Email Requerida",
        })
        .email({
            message: "invalid Email",
        }),

    contrasena: z
        .string({
            required_errror: "Contraseña Requerida",
        })
        .min(6, {
            message: "La contraseña debe tener mínimo 6 caracteres",
        })
        .max(25, {
            message: "La contraseña debe tener máximo 25 caracteres",
        }),
});
