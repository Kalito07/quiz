import { z } from "zod";

export const optionsSchema = z.object({
  content: z
    .string()
    .min(1, {
      message: "Моля въведете Отговор",
    })
    .max(1024, { message: "Отговорът може да е до 1024 символа" }),
  is_correct: z.boolean(),
});

export const questionSchema = z.object({
  content: z
    .string()
    .min(1, {
      message: "Моля въведете въпрос",
    })
    .max(1024, { message: "Въпросът може да е до 1024 символа" }),
  points: z.coerce
    .number({
      invalid_type_error: "Моля въведете число",
      required_error: "Моля въведете някакви точки",
    })
    .min(0, { message: "Не може да има отрицателни точки" })
    .max(1000, { message: "Не може да има повече от 1000 точки" })
    .refine(Number.isInteger, {
      message: "Моля въведете целочислено число",
    }),
  options: z.array(optionsSchema),
});

export const quizSchema = z.object({
  title: z
    .string()
    .min(1, {
      message: "Моля въведете заглавие",
    })
    .max(128, { message: "Заглавието може да е до 128 символа" }),
  questions: z.array(questionSchema),
});
