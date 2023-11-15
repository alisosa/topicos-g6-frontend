import { Controller } from "react-hook-form";
import { FormHelperText, MenuItem, InputLabel, Select, FormControl, IconButton } from "@mui/material";
import Close from "@mui/icons-material/Close";

const FormDropdownSelector = ({ control, name, label, keyLabel = 'item', disabled, options, requiredText, formProps, ...rest }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ ...(requiredText && { required: requiredText }) }}
      render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
        <FormControl fullWidth error={invalid} required={!!requiredText} sx={formProps}>
          <InputLabel>{label}</InputLabel>
          <Select
            {...rest}
            id={name}
            label={label}
            value={value || ''}
            disabled={disabled}
            onChange={({ target }) => onChange(target.value)}
            endAdornment={<IconButton onClick={() => onChange('')} sx={{ mr: 1.5, visibility: value ? 'visible' : 'collapse' }}><Close /></IconButton>}
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