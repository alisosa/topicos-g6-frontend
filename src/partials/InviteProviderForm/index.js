'use client'

import DeresButton from "@/components/DeresButton";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSnackbar } from 'notistack';
import FormTextInput from "@/components/FormTextInput";

const InviteProviderForm = () => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    mode: 'onChange'
  });

  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (body) => {
    setIsLoading(true);
    try {
      await axios.post('/api/inviteProvider', body, {})
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
      </Grid>

      <DeresButton loading={isLoading} text='Enviar' type="submit" variant="contained" bold />
    </Stack >
  );
};

export default InviteProviderForm;