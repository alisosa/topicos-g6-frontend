'use client'
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { useState } from 'react';
import TopBar from './TopBar';
import SearchBar from '../SearchBar';
import SideBar from './SideBar';
import { sizes } from '@/constants';

const NavBar = ({ user, children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopBar user={user} drawerIsOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <SideBar
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        component={<SearchBar />}
      />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${sizes.drawer.width}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default NavBar;
