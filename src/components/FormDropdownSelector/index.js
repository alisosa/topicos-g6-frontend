import { Controller } from "react-hook-form";
import { FormHelperText, MenuItem, InputLabel, Select, FormControl } from "@mui/material";

const FormDropdownSelector = ({ control, name, label, keyLabel = 'item', disabled, options, requiredText, formProps, ...rest }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: requiredText }}
      render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
        <FormControl fullWidth error={invalid} required sx={formProps}>
          <InputLabel>{label}</InputLabel>
          <Select
            {...rest}
            id={name}
            label={label}
            value={value || ''}
            disabled={disabled}
            onChange={({ target }) => onChange(target.value)}
          >
            {options.map(({ id, label }, index) => (
              <MenuItem
                key={`${keyLabel}-${index}`}
                value={id}
              >
                {label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl >
      )}
    />
  );
};

export default FormDropdownSelector;