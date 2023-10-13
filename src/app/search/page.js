'use client'
import NavBar from "@/components/NavBar";
import { Box, CircularProgress, Drawer, Toolbar, Typography } from "@mui/material";
import { useSession } from "next-auth/react"
import { Fragment, useState } from "react";
import { sizes } from "@/constants";

const Page = () => {
  const { data: session, status } = useSession()
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  if (status === "loading") {
    return (
      <Box position='absolute' right='50%' top='50%'>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Fragment>
      <NavBar user={session.user} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { md: sizes.drawer.width }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sizes.drawer.width },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <Typography>
              Ejemplo
            </Typography>
          </Box>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            width: sizes.drawer.width,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: sizes.drawer.width, boxSizing: 'border-box' },
            display: { xs: 'none', md: 'block' }
          }}
        // open
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <Typography>
              Ejemplo
            </Typography>
          </Box>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${sizes.drawer.width}px)` } }}
      >
        <Toolbar />
        <Typography variant="h2">
          Buscador
        </Typography>
      </Box>
    </Fragment>
  );
}

export default Page;
