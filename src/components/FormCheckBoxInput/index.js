import {
    FormHelperText,
    OutlinedInput,
    FormControl,
    InputLabel,
    RadioGroup,
    FormControlLabel,
    Radio
} from "@mui/material";
import { Controller } from "react-hook-form";
import {CheckBox} from "@mui/icons-material";

const FormCheckBoxInput = ({ control, name, label, requiredText, formProps, validations, ...rest }) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={{
                ...(requiredText && { required: requiredText }),
                ...validations
            }}
            render={({ field: { value, onChange }, fieldState: { invalid, error } }) => {
                return (
                    <FormControl fullWidth error={invalid} required sx={formProps}>
                        <InputLabel>{label}</InputLabel>
                        <RadioGroup
                            {...rest}
                            id={name}
                            value={value || undefined}
                            onChange={({ target }) => onChange(target.value)}
                        >
                            <FormControlLabel control={<Radio/>} label="verdadero" value={true}/>
                            <FormControlLabel control={<Radio/>} label="false" value={false}/>

                        </RadioGroup>
                        <FormHelperText>{error?.message}</FormHelperText>
                    </FormControl >
                )
            }}
        />
    );
};

export default FormCheckBoxInput;
