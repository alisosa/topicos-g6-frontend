import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from "@/firebase";
import axios from "axios";
import dayjs from "dayjs";

const refreshAccessToken = async (token) => {
  try {
    const url = `https://securetoken.googleapis.com/v1/token?${new URLSearchParams({
      key: process.env.NEXT_PUBLIC_FIREBASE_API_KEY
    })}`;

    const body = {
      'grant_type': 'refresh_token',
      'refresh_token': token.info.refreshToken
    };

    const { data: { id_token: accessToken, expires_in: expiresIn } } = await axios.post(url, body);

    const exp = dayjs().add(Number(expiresIn), 'seconds').unix()

    return { ...token, info: { ...token.info, exp, accessToken } };
  } catch (error) {
    console.log('error:', error)

    return {
      ...token,
      error: "RefreshAccessTokenError"
    }
  }
}

export const authOptions = {
  pages: {
    signIn: '/login'
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        try {
          const { user } = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
          const { claims: { exp }, token: accessToken } = await user.getIdTokenResult();
          const url = `http://localhost:8080/api/users/verifyToken?${new URLSearchParams({ idToken: accessToken })}`
          const { data: { role } } = await axios.get(url, {})
          return {
            email: user.email,
            role,
            accessToken,
            exp,
            refreshToken: user.refreshToken
          };
        } catch ({ code, message }) {
          switch (code) {
            case 'auth/wrong-password':
            case 'auth/user-not-found':
              throw new Error('Email o contraseña invalidos, por favor intente nuevamente');
            default:
              await signOut(auth);
              throw new Error(message || 'Upps ha ocurrido un error, por favor intente nuevamente');
          }
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const { exp, refreshToken, accessToken, ...rest } = user;
        token.user = { ...rest };
        token.info = { accessToken, refreshToken, exp };
      }

      const expirationDateToken = dayjs.unix(token.info.exp)
      const now = dayjs()
      const minutesToExpire = expirationDateToken.diff(now, 'minutes');

      if (minutesToExpire <= 5) {
        return refreshAccessToken(token);
      }

      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user = token.user;
        session.info = token.info;
        session.error = token.error;
      }
      return session
    }
  }
};