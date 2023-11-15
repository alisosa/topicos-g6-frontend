import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from "@/firebase";
import axios from "axios";

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
          const token = await user.getIdToken();
          const url = `http://localhost:8080/api/users/verifyToken?${new URLSearchParams({ idToken: token })}`
          const { data: { role } } = await axios.get(url, {})
          return {
            email: user.email,
            token,
            role
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
        token.user = { ...user }
      }
      return token
    },
    async session({ session, token }) {
      if (token?.user) {
        session.user = token.user;
      }
      return session
    }
  }
};