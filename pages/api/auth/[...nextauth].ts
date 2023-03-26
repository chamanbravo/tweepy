import { connectToDatabase } from "@/libs/mongodb"
import User from "@/models/User"
import { compare } from "bcrypt"
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials) {
        await connectToDatabase().catch((err) => {
          throw new Error(err)
        })

        const email = credentials?.email as string
        const password = credentials?.password as string

        const user = await User.findOne({ email })

        if (!user) {
          throw new Error("Invalid credentials")
        }

        const isPasswordCorrect = await compare(password, user.password)

        if (!isPasswordCorrect) {
          throw new Error("Invalid credentials")
        }

        return user
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET
  },
  secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(options)
