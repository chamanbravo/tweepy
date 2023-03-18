import Sidebar from "../Sidebar"
import TrendsBar from "../TrendsBar"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="m-auto max-w-6xl flex justify-between">
      <Sidebar />
      <div className="flex-1 border-x-[1px] border-neutral-800">{children}</div>
      <TrendsBar />
    </div>
  )
}
