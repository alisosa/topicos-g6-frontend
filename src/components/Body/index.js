import Box from '@mui/material/Box';

const Body = ({ children }) => {
  return (
    <body>
      <Box my={1}>
        {children}
      </Box>
    </body>
  );
};

export default Body;