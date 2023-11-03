'use client'

import DeresButton from "@/components/DeresButton";
import { FormControl, FormHelperText, InputLabel, Stack, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import { useForm } from "react-hook-form";
import QuestionCreationInput from "../QuestionCreationInput";

const AdminForm = ({ defaultData }) => {

  const { handleSubmit, control, formState: { errors } } = useForm({
    mode: 'onChange', defaultValues: {
      ...defaultData
    }
  });
  console.log('errors:', errors)
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (body) => {
    setIsLoading(true);
    console.log('body: ', body);
    // const url = `/search?${params}`;
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
          <TextField
            label='Dirección'
            color='primary'
            value='La Direccion de la Empresa'
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


      <DeresButton loading={isLoading} text='Buscar' type="submit" variant="contained" bold />
    </Stack >
  );
};

export default AdminForm;