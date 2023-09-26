import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "@/firebase";
import { roles } from "@/constants";
import { fetchStudent } from "@/routes/users";

export const authOptions = {
  pages: {
    signIn: '/login'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        try {
          const { user } = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
          const { data } = await fetchStudent(user.uid);
          console.log('data');
          console.log(data);
          return { ...user, role: roles.teacher };
        } catch (error) {
          console.log(error)
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
      }
      return session;
    }
  }
};