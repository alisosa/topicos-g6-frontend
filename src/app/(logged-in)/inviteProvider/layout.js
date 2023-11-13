import { Stack, Typography } from "@mui/material";

const InviteProviderLayout = ({ children }) => {
  return (
    <Stack width='100%' px={3} py={5}>
      <Typography variant="h4" textAlign='center' mb={2}>
        Invitar a un nuevo Provedor
      </Typography>
      <Stack maxWidth='800px' width='100%' mx='auto'>
        {children}
      </Stack>
    </Stack >
  );
};

export default InviteProviderLayout;