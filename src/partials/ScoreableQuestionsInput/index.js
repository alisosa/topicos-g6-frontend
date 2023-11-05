import { useFieldArray } from "react-hook-form";
import FormCheckBoxInput from "@/components/FormCheckBoxInput";
import { Stack } from "@mui/material";

const ScoreableQuestionsInput = ({ control, name }) => {
  const { fields } = useFieldArray({
    control,
    name
  });

  return (
    <Stack gap={2}>
      {fields.map(({ question }, index) => (
        <FormCheckBoxInput
          key={`question-${index}`}
          required
          control={control}
          label={question}
          requiredText='Debe seleccionar una respuesta'
          name={`${name}.${index}.value`}
        />
      ))}
    </Stack>
  );
};

export default ScoreableQuestionsInput;
