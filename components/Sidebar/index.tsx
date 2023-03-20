import Link from "next/link"
import { BiLogOut } from "react-icons/bi"
import { BsBellFill, BsHouseFill, BsTwitter } from "react-icons/bs"
import { FaUser } from "react-icons/fa"
import Button from "../Button"
import SidebarItem from "./SidebarItem"

export default function index() {
  const loggedIn = false
  const menu = [
    {
      icon: BsHouseFill,
      label: "Home",
      href: "/"
    }
  ]

  if (loggedIn)
    menu.push(
      {
        icon: BsBellFill,
        label: "Notifications",
        href: "/notifications"
      },
      {
        icon: FaUser,
        label: "Profile",
        href: `/users/`
      }
    )

  const signOut = () => {}

  return (
    <div className="flex flex-col w-[230px] h-screen pr-[1.5rem]">
      <Link href="/" className="p-[1rem] mt-[1rem] cursor-pointer">
        <BsTwitter size={26} color="#ddd" />
      </Link>
      <div className="mt-[1rem] flex flex-col gap-[0.2rem]">
        {menu.map((item, index) => {
          return (
            <SidebarItem
              key={index}
              label={item.label}
              href={item.href}
              icon={item.icon}
            />
          )
        })}
      </div>
      {loggedIn && (
        <SidebarItem icon={BiLogOut} label="Logout" onClick={() => signOut()} />
      )}
      {loggedIn && <Button label="Tweet" onClick={() => {}} fullWidth />}
    </div>
  )
}
