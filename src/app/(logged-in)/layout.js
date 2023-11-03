import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import TopBar from "@/components/NavBar/TopBar";
import { Fragment } from "react";
import { CssBaseline, Toolbar } from "@mui/material";

const LoggedInLayout = async ({ children }) => {
  const { user } = await getServerSession(authOptions);

  return (
    <Fragment>
      <CssBaseline />
      <TopBar user={user} />
      <Toolbar />
      <main>
        {children}
      </main>
    </Fragment>
  );
};

export default LoggedInLayout;