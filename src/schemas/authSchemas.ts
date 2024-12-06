import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Моля въведете имейл.",
    })
    .max(255, { message: "Имейлът е твърде дълъг." })
    .email({ message: "Моля въведете валиден имейл." }),
  password: z
    .string()
    .min(6, { message: "Моля въведете парола." })
    .max(255, { message: "Паролата ви е твърде дълга." }),
});

export const registerSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Моля въведете имейл.",
    })
    .max(255, { message: "Имейлът е твърде дълъг." })
    .email({ message: "Моля въведете валиден имейл." }),
  name: z
    .string()
    .min(1, {
      message: "Моля въведете име.",
    })
    .max(255, { message: "Името ви трябва да е до 256 символа." }),
  password: z
    .string()
    .min(6, { message: "Моля въведете парола." })
    .max(255, { message: "Паролата ви е твърде дълга." }),
  password_confirmation: z
    .string()
    .min(6, { message: "Моля въведете парола." })
    .max(255, { message: "Паролата ви е твърде дълга." }),
});
