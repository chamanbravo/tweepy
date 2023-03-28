import { connectToDatabase } from "@/libs/mongodb"
import User from "@/models/User"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end()
  }

  connectToDatabase().catch((err) => res.json(err))

  try {
    const { username } = req.query

    if (!username || typeof username !== "string") {
      throw new Error("Invalid username")
    }

    const existingUser = await User.findOne(
      { username },
      { _id: 1, name: 1, username: 1, email: 1, image: 1, verfied: 1 }
    )

    return res.status(200).json(existingUser)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
