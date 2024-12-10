import { Button } from "@/components/ui/button";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFieldArray, Control } from "react-hook-form";
import { OptionsForm } from "@/components/quiz/create/OptionsForm";

interface QuestionsFormProps {
    control: Control<any>;
    setValue: (name: string, value: any, options?: object) => void;
}

export function QuestionsForm({ control, setValue }: QuestionsFormProps) {
    const { fields: questionsFields, append: addQuestion, remove: removeQuestion } = useFieldArray({
        control,
        name: "questions",
    });

    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-text">Questions</h3>
            {questionsFields.map((questionField, index) => (
                <div
                    key={questionField.id}
                    className="p-5 shadow-sm border rounded-[2rem] space-y-4"
                >
                    <div className="flex justify-between items-center">
                        <FormLabel className="text-xl">
                            Question {index + 1}
                        </FormLabel>
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={() => removeQuestion(index)}
                            aria-label={`Remove question ${index + 1}`}
                        >
                            Remove
                        </Button>
                    </div>

                    <div className="flex space-x-4">
                        <FormField
                            control={control}
                            name={`questions.${index}.content`}
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Content</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter question content"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name={`questions.${index}.points`}
                            render={({ field }) => (
                                <FormItem className="flex-none w-2/12">
                                    <FormLabel>Points</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Enter points"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

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
                aria-label="Add a new question"
            >
                Add Question
            </Button>
        </div>
    );
}
