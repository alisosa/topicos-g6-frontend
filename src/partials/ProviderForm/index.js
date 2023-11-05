'use client'

import DeresButton from "@/components/DeresButton";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormTextInput from "@/components/FormTextInput";
import ScoreableQuestionsInput from "@/partials/ScoreableQuestionsInput";

const ProviderForm = ({ defaultData }) => {
  const { handleSubmit, control } = useForm({
    mode: 'onChange', defaultValues: {
      ...defaultData
    }
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (body) => {
    setIsLoading(true);
    //TODO: Integrar con backend
    console.log('body: ', body);
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
      <Grid container columns={{ xs: 1, md: 2 }} spacing={2}>
        <Grid xs={1}>
          <FormTextInput
            required
            control={control}
            label='Nombre'
            requiredText='Debe ingresar un nombre'
            name='name'
          />
        </Grid>
        <Grid xs={1}>
          <FormTextInput
            required
            control={control}
            label='Email'
            requiredText='Debe ingresar un email'
            name='email'
          />
        </Grid>
        <Grid xs={1}>
          <FormTextInput
            required
            control={control}
            label='RUT'
            requiredText='Debe ingresar un RUT'
            name='rut'
          />
        </Grid>
        <Grid xs={1}>
          <FormTextInput
            required
            control={control}
            label='Dirección'
            requiredText='Debe ingresar una dirección'
            name='address'
          />
        </Grid>
      </Grid>

      <ScoreableQuestionsInput control={control} name='questions' />

      <DeresButton loading={isLoading} text='Enviar' type="submit" variant="contained" bold />
    </Stack >
  );
};

export default ProviderForm;
