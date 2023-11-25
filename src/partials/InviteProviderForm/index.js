'use client'

import DeresButton from "@/components/DeresButton";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSnackbar } from 'notistack';
import FormTextInput from "@/components/FormTextInput";
import {useSession} from "next-auth/react";

const InviteProviderForm = () => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    mode: 'onChange'
  });

  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const {data:session} = useSession();

  const onSubmit = async (body) => {
    setIsLoading(true);
    try {
      const url = 'http://localhost:8080/api/users/inviteProvider';
      await axios.post(url, body, {headers: {Authorization: session.info.accessToken}});
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