import mainTheme from '@/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Head from 'next/head'
import Provider from '@/components/Provider'
import axios from 'axios'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/options'

const RootLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (session) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${session.info.accessToken}}`;
  }
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <CssBaseline />
      <ThemeProvider theme={mainTheme}>
        <Provider>
          <body>
            {children}
          </body>
        </Provider>
      </ThemeProvider>
    </html >
  );
}

export const metadata = {
  title: 'Ejemplo',
  description: 'Descripcion ejemplo',
  keywords: [],
  authors: [],
}
export default RootLayout;