import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quizSchema } from "@/schemas/quizSchemas";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { QuestionsForm } from "@/components/quiz/create/QuestionsForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { api } from "@/api";

export function QuizForm() {
  const form = useForm({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      title: "",
      questions: [
        {
          content: "",
          points: 0,
          options: [{ content: "", is_correct: false }],
        },
      ],
    },
  });

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = form;

  async function onSubmit(values: z.infer<typeof quizSchema>) {
    if (!noCorrectOptions(values.questions)) {
      await api.quiz.create(values);
    }
  }

  function noCorrectOptions(
    questions: z.infer<typeof quizSchema>["questions"],
  ): boolean {
    let foundNoCorrectOptions = false;

    questions.forEach((question, index) => {
      if (!question.options.some((option) => option.is_correct)) {
        foundNoCorrectOptions = true;

        form.setError(`questions.${index}.content`, {
          message: "Трябва да изберете някой отговор като верен.",
        });
      }
    });

    return foundNoCorrectOptions;
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <FormItem className="pb-3">
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter quiz title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <QuestionsForm control={control} errors={errors} setValue={setValue} />
        <div className="flex justify-end mt-3">
          <Button type="submit" variant="default">
            Submit Quiz
          </Button>
        </div>
      </form>
    </Form>
  );
}
