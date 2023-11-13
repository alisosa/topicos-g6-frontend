import { useFieldArray } from "react-hook-form";
import FormRadiosInput from "@/components/FormRadiosInput";
import { Stack } from "@mui/material";

const ScoreableQuestionsInput = ({ control, name }) => {
  const { fields } = useFieldArray({
    control,
    name
  });

  return (
    <Stack gap={2}>
      {fields.map(({ question }, index) => (
        <FormRadiosInput
          key={`question-${index}`}
          required
          control={control}
          label={question}
          requiredText='Debe seleccionar una respuesta'
          name={`${name}.${index}.scorable`}
        />
      ))}
    </Stack>
  );
};

export default ScoreableQuestionsInput;
