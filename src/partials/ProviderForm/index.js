'use client'

import DeresButton from "@/components/DeresButton";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormTextInput from "@/components/FormTextInput";
import ScoreableQuestionsInput from "@/partials/ScoreableQuestionsInput";
import axios from "axios";
import { useSnackbar } from 'notistack';
import { categories } from "@/constants";
import FormDropdownSelector from "@/components/FormDropdownSelector";

const ProviderForm = ({ defaultData }) => {
  const { handleSubmit, control } = useForm({
    mode: 'onChange', defaultValues: {
      ...defaultData
    }
  });

  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (body) => {
    setIsLoading(true);
    try {
      await axios.post('/api/providers/create', body, {})
      enqueueSnackbar(`Exito!`, { variant: 'success' });
    }
    catch (error) {
      enqueueSnackbar(error, { variant: 'error' })
    }
    finally {
      setIsLoading(false);
    }
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
      <Grid container columns={{ xs: 1, md: 2 }} spacing={2}>
        <Grid xs={1}>
          <FormTextInput
            required
            control={control}
            label='Nombre'
            requiredText='Debe ingresar un nombre'
            name='provider.name'
          />
        </Grid>
        <Grid xs={1}>
          <FormTextInput
            required
            control={control}
            label='Email'
            requiredText='Debe ingresar un email'
            name='provider.email'
          />
        </Grid>
        <Grid xs={1}>
          <FormTextInput
            required
            control={control}
            label='RUT'
            requiredText='Debe ingresar un RUT'
            name='provider.rut'
          />
        </Grid>
        <Grid xs={1}>
          <FormDropdownSelector
            control={control}
            options={categories}
            label='Rubro'
            requiredText='Debe ingresar un rubro'
            name='provider.category'
          />
        </Grid>
        <Grid xs={1}>
          <FormTextInput
            required
            control={control}
            label='Dirección'
            requiredText='Debe ingresar una dirección'
            name='provider.address'
          />
        </Grid>
        <Grid xs={1}>
          <FormTextInput
            required
            control={control}
            label='Logo'
            requiredText='Debe ingresar una url con la foto del logo'
            name='provider.logo'
          />
        </Grid>
      </Grid>

      <ScoreableQuestionsInput control={control} name='questions' />

      <DeresButton loading={isLoading} text='Enviar' type="submit" variant="contained" bold />
    </Stack >
  );
};

export default ProviderForm;
