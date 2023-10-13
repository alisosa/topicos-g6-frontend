import NavBar from "@/components/NavBar";
import { Box, Typography } from "@mui/material";
import { getServerSession } from "next-auth";
import { Fragment } from "react";
import { authOptions } from "../api/auth/[...nextauth]/options";


const Page = async () => {
  const { user } = await getServerSession(authOptions);

  return (
    <Fragment>
      <NavBar user={user} />
      <Box>
        <Typography variant="h2">
          Buscador
        </Typography>
      </Box>
    </Fragment>
  );
}

export default Page;
