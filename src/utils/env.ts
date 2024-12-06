import { z } from "zod";

const envVariables = z.object({
  VITE_SERVER_URL: z.string().url(),
});

const parsedEnv = envVariables.safeParse(import.meta.env);

if (!parsedEnv.success) {
  console.error("Invalid environment variables", parsedEnv.error.format());
  throw new Error("Invalid environment variables");
}

export const env = parsedEnv.data;
