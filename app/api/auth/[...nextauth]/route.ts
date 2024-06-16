import { authOptions } from "@/lib/auth/authoptions" // Referring to the auth.ts we just created
import NextAuth from "next-auth"

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST };