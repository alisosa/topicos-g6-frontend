import { Stack, Typography } from "@mui/material";

const FormLayout = ({ children }) => {
  return (
    <Stack width='100%' px={3} py={5}>
      <Typography variant="h4" textAlign='center' mb={2}>
        Editor de Formulario
      </Typography>
      <Stack maxWidth='800px' mx='auto'>
        {children}
      </Stack>
    </Stack >
  );
};

export default FormLayout;