import NextAuth, { Session } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/db"
import { AdapterUser } from "next-auth/adapters"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET,
          authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code",
            },
          },
        }),
      ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async session({session, user}:{session: Session, user: AdapterUser}) {
      session.user.id = user.id
      return session
    },
  },
})

