'use client'
import { AccountCircle } from '@mui/icons-material';
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { signOut } from 'next-auth/react';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { sizes } from '@/constants';
import DeresButton from '@/components/DeresButton';

const navBarButtons = {
  ADMIN: [{ url: '/search', text: 'Proveedores' }, { url: '/form', text: 'Formulario para Proveedores' }],
  PROVEEDOR: [],
  SOCIO: [{ url: '/search', text: 'Proveedores' }, { url: '/inviteProvider', text: 'Invitar Proveedor' }]
}

const TopBar = ({ user, hasSideBar, drawerIsOpen, handleDrawerToggle }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position='fixed'
      color='secondary'
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        ml: { md: `${sizes.drawer.width}px` },
      }}
    >
      <Toolbar >
        {hasSideBar && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            {drawerIsOpen ? (<CloseIcon />) : (<MenuIcon />)}
          </IconButton>
        )}
        <Typography variant='body1' marginRight='auto'>
          {user.email}
        </Typography>
        <Box marginLeft='auto' marginRight='auto' display='flex' columnGap={4}>
          {navBarButtons[user.role].map((props, i) => <DeresButton key={`menu-item-${i}`} {...props} variant='outlined' bold />)}
        </Box>
        <Box marginLeft='auto'>
          <IconButton
            size='large'
            aria-haspopup='true'
            onClick={handleMenu}
            color='inherit'
          >
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => signOut({ redirect: true, callbackUrl: '/login' })}>Cerrar Sesion</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
