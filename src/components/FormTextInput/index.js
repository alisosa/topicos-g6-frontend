import { FormHelperText, OutlinedInput, FormControl, InputLabel } from "@mui/material";
import { Controller } from "react-hook-form";

const FormTextInput = ({ control, name, label, requiredText, formProps, validations, ...rest }) => {
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
            <OutlinedInput
              {...rest}
              id={name}
              label={label}
              value={value || ''}
              onChange={({ target }) => onChange(target.value)}
            />
            <FormHelperText>{error?.message}</FormHelperText>
          </FormControl >
        )
      }}
    />
  );
};

export default FormTextInput;