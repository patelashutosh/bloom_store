import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    session({ session, token }) {
      // For JWT sessions, get user info from token
      if (session.user && token) {
        session.user.id = token.id as string
        session.user.name = token.name as string
        session.user.email = token.email as string
        session.user.image = token.image as string
      }
      return session
    },
    jwt({ token, user, account, profile }) {
      // Store user info in token when user logs in
      if (user) {
        token.id = user.id
        token.name = user.name
        token.email = user.email
        token.image = user.image
      }
      
      // Store account info in token for edge compatibility
      if (account) {
        token.accessToken = account.access_token
      }
      
      return token
    },
  },
  pages: {
    signIn: '/sign-in',
  },
  session: {
    strategy: "jwt", // Use JWT for edge runtime compatibility
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  debug: process.env.NODE_ENV === "development",
  trustHost: true,
})
