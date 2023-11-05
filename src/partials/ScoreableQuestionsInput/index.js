import { useFieldArray } from "react-hook-form";
import { Box, FormControlLabel, Checkbox } from "@mui/material";

const ScoreableQuestionsInput = ({ control, name }) => {
    const { fields } = useFieldArray({
        control,
        name
    });

    return (
        <Box sx={{ mt: 2 }}>
            {fields.map((field, index) => (
                <FormControlLabel
                    key={`question-${index}`}
                    control={
                        <Checkbox
                            {...control.register(`${name}.${index}.value`)}
                            color="primary"
                        />
                    }
                    label={field.question}
                    sx={{ display: 'block', mb: 1 }}
                />
            ))}
        </Box>
    );
};

export default ScoreableQuestionsInput;
