import { connectToDatabase } from "@/lib/mongodb"
import { User } from "@/models"
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

        const user = await User.findOne({
          email: credentials?.email
        }).select("+password")

        if (!user) {
          throw new Error("Invalid credentials")
        }

        const isPasswordCorrect = await compare(
          credentials!.password,
          user.password
        )

        if (!isPasswordCorrect) {
          throw new Error("Invalid credentials")
        }

        return user
      }
    })
  ],
  session: {
    strategy: "jwt"
  }
}

export default NextAuth(options)
