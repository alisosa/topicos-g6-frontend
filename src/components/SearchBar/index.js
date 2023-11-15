import { Stack, TextField } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormNumberInput from "../FormNumberInput";
import DeresButton from "../DeresButton";
import { categories } from "@/constants";
import FormDropdownSelector from "../FormDropdownSelector";

const SearchBar = () => {
  const searchParams = useSearchParams();

  const { register, handleSubmit, control, formState: { errors }, } = useForm({
    mode: 'onChange', defaultValues: {
      name: searchParams.get('name'),
      rut: searchParams.get('rut'),
      category: searchParams.get('category'),
      scoreFrom: searchParams.get('scoreFrom'),
      scoreTo: searchParams.get('scoreTo')
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  const onSubmit = async ({ name, rut, category, scoreFrom, scoreTo }) => {
    setIsLoading(true);
    const params = new URLSearchParams({
      ...(name && { name }),
      ...(rut && { rut }),
      ...(category && { category }),
      ...(scoreFrom && { scoreFrom }),
      ...(scoreTo && { scoreTo })
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
        inputProps={{
          ...register("name")
        }}
      />
      <TextField
        label='RUT'
        fullWidth
        color='primary'
        inputProps={{
          ...register("rut")
        }}
      />
      <FormDropdownSelector
        control={control}
        options={categories}
        label='Rubro'
        name='category'
      />
      <FormNumberInput
        control={control}
        name='scoreFrom'
        label='Puntaje Desde'
        min={{
          value: 0,
          message: 'El score debe ser mayor a 0',
        }}
        max={{
          value: 100,
          message: 'El score maximo es 100',
        }}
        validate={(value, formValues) => !value || !formValues.scoreTo || value < formValues.scoreTo || 'El score Desde debe ser menor al Hasta'}
      />
      <FormNumberInput
        control={control}
        name='scoreTo'
        label='Puntaje Hasta'
        min={{
          value: 0,
          message: 'El score debe ser mayor a 0',
        }}
        max={{
          value: 100,
          message: 'El score maximo es 100',
        }}
        validate={(value, formValues) => !value || !formValues.scoreFrom || value > formValues.scoreFrom || 'El score Hasta debe ser mayor al Desde'}
      />
      <DeresButton loading={isLoading} text='Buscar' type="submit" variant="contained" bold />
    </Stack >
  );
};

export default SearchBar;