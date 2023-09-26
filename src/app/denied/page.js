import { Box, Typography } from "@mui/material";

const Page = () => {
  return (
    <Box display='flex' justifyContent='center' position='absolute' top={0} bottom={0} left={0} right={0} m='auto'>
      <Box display='flex' flexDirection='column' justifyContent='center' alignContent='center' gap={2} mx={2}>
        <Typography variant='h1' textAlign='center'>
          Acceso Denegado!
        </Typography>
        <Typography variant='h5' textAlign='center'>
          No puede visualizar esta pagina, ya que no cuenta con los permisos necesarios.
        </Typography>
      </Box>
    </Box>
  );
};

export default Page;