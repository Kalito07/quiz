import { useFieldArray } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function OptionsForm({
  control,
  questionIndex,
  setValue,
}: {
  control: any;
  questionIndex: number;
  setValue: any;
}) {
  const { fields: optionsFields, append: addOption } = useFieldArray({
    control,
    name: `questions.${questionIndex}.options`,
  });

  const handleCorrectOptionChange = (selectedOptionIndex: number) => {
    optionsFields.forEach((_, index) => {
      setValue(
        `questions.${questionIndex}.options.${index}.is_correct`,
        index === selectedOptionIndex,
      );
    });
  };

  return (
    <div>
      <h4>Options for Question {questionIndex + 1}</h4>
      <RadioGroup
        onValueChange={(val) => handleCorrectOptionChange(Number(val))}
      >
        {optionsFields.map((option, optionIndex) => (
          <div
            key={option.id}
            className="flex items-center justify-center space-x-4"
          >
            <FormField
              control={control}
              name={`questions.${questionIndex}.options.${optionIndex}.content`}
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel>Option {optionIndex + 1}</FormLabel>
                  <div className="flex items-center justify-center gap-4">
                    <FormControl>
                      <Input placeholder="Enter option content" {...field} />
                    </FormControl>
                    <FormField
                      control={control}
                      name={`questions.${questionIndex}.options.${optionIndex}.is_correct`}
                      render={({ field: radioField }) => (
                        <FormItem>
                          <FormControl>
                            <RadioGroupItem
                              value={optionIndex.toString()}
                              checked={radioField.value}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}
      </RadioGroup>

      <Button
        type="button"
        onClick={() => addOption({ content: "", is_correct: false })}
      >
        Add Option
      </Button>
    </div>
  );
}
