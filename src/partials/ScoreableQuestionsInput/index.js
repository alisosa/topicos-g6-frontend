import {useFieldArray} from "react-hook-form";
import AddIcon from '@mui/icons-material/Add';
import {Box, Stack} from "@mui/material";
import DeresButton from "@/components/DeresButton";
import FormTextInput from "@/components/FormTextInput";
import FormDropdownSelector from "@/components/FormDropdownSelector";
import {questionTypes} from "@/constants";
import FormCheckBoxInput from "@/components/FormCheckBoxInput";

const ScoreableQuestionsInput = ({control, name}) => {
    const {fields} = useFieldArray({
        control,
        name
    });

    return (
        <Stack rowGap={2}>
            {fields.map(({question}, index) => (
                <FormCheckBoxInput
                    key={`question-${index}`}
                    required
                    control={control}
                    label={question}
                    requiredText='Debe ingresar una pregunta'
                    name={`${name}.${index}.value`}
                />
            ))}
        </Stack>
    );
};

export default ScoreableQuestionsInput;
