import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Controller } from "react-hook-form";
import { FormHelperText, OutlinedInput } from "@mui/material";
import { NumericFormat } from 'react-number-format';
import { forwardRef } from 'react';

const NumericFormatCustom = forwardRef(function NumericFormatCustom(
  props,
  ref,
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={({ value }) => onChange({ target: { value } })}
      onKeyDown={({ key, target }) => {
        switch (key) {
          case 'ArrowUp':
            onChange({
              target: {
                value: (parseInt((target.value || "0").replaceAll(',', '')) + 1).toString(),
              }
            })
            break;
          case 'ArrowDown':
            onChange({
              target: {
                value: (parseInt((target.value || "0").replaceAll(',', '')) - 1).toString(),
              }
            })
            break;
        }
      }}
      thousandSeparator
    />
  );
});


const FormNumberInput = ({ control, name, label, requiredText, min, max, validate, ...rest }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        ...(requiredText && { required: requiredText }),
        ...(min && { min }),
        ...(max && { max }),
        validate
      }}
      render={({ field: { value, onChange }, fieldState: { invalid, error }, }) => {
        return (
          <FormControl fullWidth error={invalid} required sx={{ m: 1 }}>
            <InputLabel>{label}</InputLabel>
            <OutlinedInput
              {...rest}
              id={name}
              label={label}
              value={value}
              onChange={({ target }) => onChange(target.value)}
              inputComponent={NumericFormatCustom}
            />
            <FormHelperText>{error?.message}</FormHelperText>
          </FormControl >
        )
      }}
    />
  );
};

export default FormNumberInput;