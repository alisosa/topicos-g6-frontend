'use client'

import Stack from '@mui/material/Stack';
import { Typography, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';
import DeresButton from '@/components/DeresButton';


const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const onSubmit = async ({ email, password }) => {
    setIsLoading(true);

    const { error } = await signIn('credentials', { email, password, redirect: false });

    if (error) {
      enqueueSnackbar(error, { variant: 'error' })
    } else {
      router.push('/search');
      router.refresh();
    }

    setIsLoading(false);
  }

  return (
    <Stack width='100%' alignItems='center'>
      <Stack maxWidth='500px' margin='8px'>
        <Typography textAlign='center' sx={{ typography: { xs: 'h2', sm: 'h2' } }}>
          Iniciar Sesión
        </Typography>
        <Typography variant='body1' textAlign='center'>
          Ingrese su Email y Contraseña
        </Typography>
        <Stack borderColor='primary' border={4} borderRadius={2} padding={4}>
          <Stack
            component='form'
            noValidate
            autoComplete='off'
            spacing={3}
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              label='Email'
              color='primary'
              error={!!errors?.email}
              helperText={errors?.email?.message}
              inputProps={{
                ...register("email", {
                  required: 'Ingresa un email'
                })
              }}
            />
            <TextField
              label='Contraseña'
              type='password'
              autoComplete='current-password'
              color='primary'
              inputProps={{ ...register("password") }}
            />
            <DeresButton loading={isLoading} text='Iniciar Sesión' type="submit" variant="contained" animated />
          </Stack>
        </Stack>
      </Stack>
    </Stack >
  );
};

export default Page;