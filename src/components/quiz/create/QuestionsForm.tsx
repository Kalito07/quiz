import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFieldArray } from "react-hook-form";
import { OptionsForm } from "@/components/quiz/create/OptionsForm";

export function QuestionsForm({ control, setValue }: any) {
  const { fields: questionsFields, append: addQuestion } = useFieldArray({
    control,
    name: "questions",
  });

  return (
    <div>
      <h3 className="text-7xl mb-2">Questions</h3>
      {questionsFields.map((questionField, index) => (
        <div key={questionField.id}>
          <FormField
            control={control}
            name={`questions.${index}.content`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Question {index + 1}</FormLabel>
                <FormControl>
                  <Input placeholder="Enter question content" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={`questions.${index}.points`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Points</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter points" type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <OptionsForm
            control={control}
            questionIndex={index}
            setValue={setValue}
          />
        </div>
      ))}
      <Button
        type="button"
        onClick={() =>
          addQuestion({
            content: "",
            points: 0,
            options: [{ content: "", is_correct: false }],
          })
        }
      >
        Add Question
      </Button>
    </div>
  );
}
