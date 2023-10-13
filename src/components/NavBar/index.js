'use client'
import { AccountCircle } from '@mui/icons-material';
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { signOut } from 'next-auth/react';
import { useState } from 'react';

const NavBar = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='static' color='secondary'>
      <Toolbar>
        <Typography variant='body1' marginRight='auto'>
          {user.email}
        </Typography>
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

export default NavBar;
