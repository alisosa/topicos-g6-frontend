import {
  FormHelperText,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography
} from "@mui/material";
import { Controller } from "react-hook-form";

const FormRadiosInput = ({ control, name, label, requiredText, formProps, validations, ...rest }) => {
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
            <Typography variant="h6" color={invalid ? 'error.main' : 'main'} sx={{ fontWeight: 'bold', transform: 'translate(4px, 0) scale(1) !important' }}>{label} *</Typography>
            <RadioGroup
              {...rest}
              id={name}
              value={value || null}
              onChange={({ target }) => onChange(target.value)}
            >
              <FormControlLabel control={<Radio />} label="verdadero" value={true} />
              <FormControlLabel control={<Radio />} label="false" value={false} />

            </RadioGroup>
            <FormHelperText>{error?.message}</FormHelperText>
          </FormControl >
        )
      }}
    />
  );
};

export default FormRadiosInput;
