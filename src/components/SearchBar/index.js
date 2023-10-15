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
      nombre: searchParams.get('nombre'),
      rut: searchParams.get('rut'),
      puntajeDesde: searchParams.get('puntajeDesde'),
      puntajeHasta: searchParams.get('puntajeHasta')
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  const onSubmit = async ({ nombre, rut, puntajeDesde, puntajeHasta }) => {
    setIsLoading(true);
    const params = new URLSearchParams({
      ...(nombre && { nombre }),
      ...(rut && { rut }),
      ...(puntajeDesde && { puntajeDesde }),
      ...(puntajeHasta && { puntajeHasta })
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
        label='Nombre'
        fullWidth
        color='primary'
        error={!!errors?.name}
        helperText={errors?.name?.message}
        inputProps={{
          ...register("nombre")
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
        name='puntajeDesde'
        label='Puntaje Desde'
        min={{
          value: 0,
          message: 'El puntaje debe ser mayor a 0',
        }}
        max={{
          value: 100,
          message: 'El puntaje maximo es 100',
        }}
        validate={(value, formValues) => !value || !formValues.puntajeHasta || value < formValues.puntajeHasta || 'El Puntaje Desde debe ser menor al Hasta'}
      />
      <FormNumberInput
        control={control}
        name='puntajeHasta'
        label='Puntaje Hasta'
        min={{
          value: 0,
          message: 'El puntaje debe ser mayor a 0',
        }}
        max={{
          value: 100,
          message: 'El puntaje maximo es 100',
        }}
        validate={(value, formValues) => !value || !formValues.puntajeDesde || value > formValues.puntajeDesde || 'El Puntaje Hasta debe ser mayor al Desde'}
      />
      <DeresButton loading={isLoading} text='Buscar' type="submit" variant="contained" bold />
    </Stack >
  );
};

export default SearchBar;