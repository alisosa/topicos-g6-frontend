'use client'

import { SessionProvider } from 'next-auth/react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { SnackbarProvider } from 'notistack';

const Provider = ({ children }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SessionProvider>
        <SnackbarProvider
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          autoHideDuration={6000}
        >
          {children}
        </SnackbarProvider>
      </SessionProvider>
    </LocalizationProvider>
  )
};

export default Provider;