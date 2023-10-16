import { Stack, TextField } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormNumberInput from "../FormNumberInput";
import DeresButton from "../DeresButton";

const SearchBar = () => {
  const searchParams = useSearchParams();

  const { register, handleSubmit, control, formState: { errors }, } = useForm({
    mode: 'onChange', defaultValues: {
      name: searchParams.get('name'),
      rut: searchParams.get('rut'),
      scoreDesde: searchParams.get('scoreDesde'),
      scoreHasta: searchParams.get('scoreHasta')
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  const onSubmit = async ({ name, rut, scoreDesde, scoreHasta }) => {
    setIsLoading(true);
    const params = new URLSearchParams({
      ...(name && { name }),
      ...(rut && { rut }),
      ...(scoreDesde && { scoreDesde }),
      ...(scoreHasta && { scoreHasta })
    })
    const url = `/search?${params}`;
    router.push(url)
    setIsLoading(false);
  }
  return (
    <Stack
      component='form'
      noValidate
      autoComplete='off'
      spacing={2}
      onSubmit={handleSubmit(onSubmit)}
      width='100%'
    >
      <TextField
        label='name'
        fullWidth
        color='primary'
        error={!!errors?.name}
        helperText={errors?.name?.message}
        inputProps={{
          ...register("name")
        }}
      />
      <TextField
        label='RUT'
        fullWidth
        color='primary'
        error={!!errors?.name}
        helperText={errors?.name?.message}
        inputProps={{
          ...register("rut")
        }}
      />
      <FormNumberInput
        control={control}
        name='scoreDesde'
        label='score Desde'
        min={{
          value: 0,
          message: 'El score debe ser mayor a 0',
        }}
        max={{
          value: 100,
          message: 'El score maximo es 100',
        }}
        validate={(value, formValues) => !value || !formValues.scoreHasta || value < formValues.scoreHasta || 'El score Desde debe ser menor al Hasta'}
      />
      <FormNumberInput
        control={control}
        name='scoreHasta'
        label='score Hasta'
        min={{
          value: 0,
          message: 'El score debe ser mayor a 0',
        }}
        max={{
          value: 100,
          message: 'El score maximo es 100',
        }}
        validate={(value, formValues) => !value || !formValues.scoreDesde || value > formValues.scoreDesde || 'El score Hasta debe ser mayor al Desde'}
      />
      <DeresButton loading={isLoading} text='Buscar' type="submit" variant="contained" bold />
    </Stack >
  );
};

export default SearchBar;