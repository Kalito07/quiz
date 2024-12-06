import { axios } from "@/api";
import { z } from "zod";
import { quizSchema } from "@/schemas/quizSchemas";

export default {
  create,
};

async function create(values: z.infer<typeof quizSchema>) {
  try {
    await axios.post("/api/quizzes", values);
  } catch (error) {
    console.log(error);
  }
}
