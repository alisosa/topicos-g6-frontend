'use client'

import { SessionProvider } from 'next-auth/react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const Provider = ({ children }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SessionProvider>
        {children}
      </SessionProvider>
    </LocalizationProvider>
  )
};

export default Provider;