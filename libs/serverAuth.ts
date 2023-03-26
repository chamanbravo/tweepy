import { connectToDatabase } from "@/libs/mongodb"
import User from "@/models/User"
import { NextApiRequest } from "next"
import { getSession } from "next-auth/react"

const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req })

  await connectToDatabase().catch((err) => {
    throw new Error(err)
  })

  if (!session?.user?.email) {
    throw new Error("Not signed in")
  }

  const currentUser = await User.findOne(
    { email: session.user.email },
    { _id: 1, name: 1, username: 1, email: 1, image: 1, verfied: 1 }
  )

  if (!currentUser) {
    throw new Error("Not signed in")
  }

  return { currentUser }
}

export default serverAuth
