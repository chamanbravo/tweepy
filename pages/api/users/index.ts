import { connectToDatabase } from "@/libs/mongodb"
import User from "@/models/User"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectToDatabase().catch((err) => res.json(err))

  if (req.method !== "GET") {
    return res.status(405).end()
  }

  try {
    const users = await User.find({})
    return res.status(200).json(users)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
