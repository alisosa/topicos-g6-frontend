import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "@/firebase";
import { roles } from "@/constants";

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
          return {
            email: user.email,
            token,
            role: roles.proveedor
          };
        } catch (_error) {
          throw new Error('Email o contraseña invalidos, por favor intente nuevamente');
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