import { connectToDatabase } from "@/lib/mongodb"
import { User } from "@/models"
import bcrypt from "bcrypt"
import mongoose from "mongoose"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDatabase().catch((err) => res.json(err))

  if (req.method === "POST") {
    if (!req.body) return res.status(400).json({ error: "Data is missing" })
    const { name, email, password, username } = req.body
    const userExists = await User.findOne({ email })

    if (userExists) {
      return res.status(409).json({ error: "Email Already exists" })
    }
    if (password.length < 6) {
      return res
        .status(409)
        .json({ error: "Password should be 6 characters long" })
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 12)
      const user = await new User({
        name,
        email,
        password: hashedPassword,
        username
      })
      await user.save()
      return res.status(200).json({
        success: true,
        user
      })
    } catch (error: any) {
      if (error && error instanceof mongoose.Error.ValidationError) {
        for (let field in error.errors) {
          const msg = error.errors[field].message
          return res.status(409).json({ error: msg })
        }
      }
      return res
        .status(500)
        .json({ success: false, error: "Internal Server Error" })
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" })
  }
}

export default handler
