import { sizes } from "@/constants";
import { Box, Drawer, Toolbar } from "@mui/material";

const SideBar = ({ mobileOpen, component, handleDrawerToggle }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { md: sizes.drawer.width }, flexShrink: { md: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        PaperProps={{ elevation: 8 }}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { xs: '100%', sm: sizes.drawer.width } },
        }}
      >
        <Toolbar />
        <Box overflow='auto' m={2} py={1}>
          {component}
        </Box>
      </Drawer>
      <Drawer
        PaperProps={{ elevation: 8 }}
        variant="permanent"
        sx={{
          width: sizes.drawer.width,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: sizes.drawer.width, boxSizing: 'border-box' },
          display: { xs: 'none', md: 'block' }
        }}
      >
        <Toolbar />
        <Box overflow='auto' m={2} py={1}>
          {component}
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideBar;