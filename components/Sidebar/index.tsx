import Link from "next/link"
import { BsBellFill, BsHouseFill, BsTwitter } from "react-icons/bs"
import { BiLogOut } from "react-icons/bi"
import { FaUser } from "react-icons/fa"
import SidebarItem from "./SidebarItem"
import Button from "../Button"

export default function index() {
  const loggedIn = true
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

  const signOut = () => {
    console.log("test")
  }

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
