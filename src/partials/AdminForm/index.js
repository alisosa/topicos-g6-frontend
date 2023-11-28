'use client'

import DeresButton from "@/components/DeresButton";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import { useForm } from "react-hook-form";
import QuestionCreationInput from "../QuestionCreationInput";
import axios from "axios";
import { useSnackbar } from 'notistack';

const AdminForm = ({ defaultData }) => {

  const { handleSubmit, control, formState: { errors } } = useForm({
    mode: 'onChange', defaultValues: {
      ...defaultData
    }
  });

  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (body) => {
    setIsLoading(true);
    try {
      await axios.put('/api/form', body, {})
      enqueueSnackbar(`Email enviado!`, { variant: 'success' });
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
          <TextField
            label='Nombre'
            color='primary'
            value='El Nombre de la Empresa'
            fullWidth
            disabled
          />
        </Grid>
        <Grid xs={1}>
          <TextField
            label='Email'
            color='primary'
            value='El Email de la Empresa'
            fullWidth
            disabled
          />
        </Grid>
        <Grid xs={1}>
          <TextField
            label='RUT'
            color='primary'
            value='El RUT de la Empresa'
            fullWidth
            disabled
          />
        </Grid>
        <Grid xs={1}>
          <FormControl disabled fullWidth>
            <InputLabel>Rubro</InputLabel>
            <Select
              label='Rubro'
              color='primary'
              value='category'
            >
              <MenuItem value='category'>Rubro de la empresa</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={1}>
          <TextField
            label='Dirección'
            color='primary'
            value='La Direccion de la Empresa'
            fullWidth
            disabled
          />
        </Grid>
        <Grid xs={1}>
          <TextField
            label='Logo'
            color='primary'
            value='https://dynamic.brandcrowd.com/asset/logo/3cfd6b07-267e-456b-9bb7-d5029cc6bb52/logo-search-grid-1x?logoTemplateVersion=1&v=637654796499570000'
            fullWidth
            disabled
          />
        </Grid>
      </Grid>

      <FormControl error={!!errors?.questions}>
        <InputLabel sx={{ position: 'static', transform: 'none !important', mb: 2 }}>Preguntas para ponderación</InputLabel>
        <QuestionCreationInput control={control} name='questions' />
        {!!errors?.questions?.root?.message && (<FormHelperText>{errors?.questions?.root?.message}</FormHelperText>)}
      </FormControl>

      <DeresButton loading={isLoading} text='Enviar' type="submit" variant="contained" bold />
    </Stack >
  );
};

export default AdminForm;
