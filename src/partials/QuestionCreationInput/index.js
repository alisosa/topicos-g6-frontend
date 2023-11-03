import { useFieldArray } from "react-hook-form";
import AddIcon from '@mui/icons-material/Add';
import { Box, Stack } from "@mui/material";
import DeresButton from "@/components/DeresButton";
import FormTextInput from "@/components/FormTextInput";
import FormDropdownSelector from "@/components/FormDropdownSelector";
import { questionTypes } from "@/constants";

const QuestionCreationInput = ({ control, name }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
    rules: {
      required: 'Debe ingresar al menos una pregunta'
    }
  });

  return (
    <Stack rowGap={2}>
      <Stack rowGap={3}>
        {fields.map((item, index) => (
          <Box key={item.id} display='flex' gap={1} flexWrap='wrap' alignItems='center'>
            <Stack flex='2 1' rowGap={2}>
              <FormTextInput
                required
                control={control}
                label='Pregunta'
                requiredText='Debe ingresar una pregunta'
                name={`${name}.${index}.question`}
                formProps={{ flex: '2 1' }}
              />
              <FormDropdownSelector
                control={control}
                name={`${name}.${index}.type`}
                requiredText='El tipo de pregunta es requerido'
                disabled
                label='Tipo'
                options={questionTypes}
                formProps={{ width: 'fit-content' }}
              />
            </Stack>
            <DeresButton
              onClick={() => remove(index)}
              text='Eliminar'
              variant='outlined'
              sx={{ marginLeft: 'auto' }}
            />
          </Box>
        ))}
      </Stack>
      <DeresButton
        onClick={() => append({ question: '', type: 'boolean' })}
        text='Agregar'
        variant='contained'
        startIcon={<AddIcon />}
        sx={{ width: 'fit-content' }}
      />
    </Stack >
  );
};

export default QuestionCreationInput;