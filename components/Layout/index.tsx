import { useAppDispatch } from "@/store"
import { currentUser } from "@/store/features/user"
import { useSession } from "next-auth/react"
import Sidebar from "../Sidebar"
import TrendsBar from "../TrendsBar"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const dipatch = useAppDispatch()
  const { status } = useSession()
  const loggedIn = status === "authenticated"

  if (loggedIn) {
    dipatch(currentUser())
  }

  return (
    <div className="m-auto max-w-6xl flex justify-between">
      <Sidebar loggedIn={loggedIn} />
      <div className="flex-1 border-x-[1px] border-neutral-800">{children}</div>
      <TrendsBar />
    </div>
  )
}
