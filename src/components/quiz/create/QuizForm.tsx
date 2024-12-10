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
    if (!validateQuestions(values.questions)) {
      await api.quiz.create(values);
    }
  }

  function validateQuestions(
      questions: z.infer<typeof quizSchema>["questions"]
  ): boolean {
    let hasErrors = false;

    questions.forEach((question, index) => {
      if (!question.options.some((option) => option.is_correct)) {
        hasErrors = true;

        form.setError(`questions.${index}.content`, {
          message: "At least one answer must be marked as correct.",
        });
      }
    });

    return hasErrors;
  }

  return (
      <Form {...form}>
        <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="max-w-4xl mx-auto text-text pt-2 space-y-8"
        >
          <FormField
              control={control}
              name="title"
              render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-2xl">
                      Quiz Title
                    </FormLabel>
                    <FormControl>
                      <Input
                          placeholder="Enter quiz title"
                          {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
              )}
          />
          <QuestionsForm control={control} errors={errors} setValue={setValue} />
          <div className="flex justify-end space-x-4">
            <Button
                type="reset"
            >
              Reset
            </Button>
            <Button
                type="submit">
              Submit Quiz
            </Button>
          </div>
        </form>
      </Form>
  );
}