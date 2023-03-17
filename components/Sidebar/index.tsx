import { BsBellFill, BsHouseFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import SidebarItems from './SidebarItems'

export default function index() {
  const menu = [
    {
      icon: BsHouseFill,
      label: 'Home',
      href: '/',
    },
    {
      icon: BsBellFill,
      label: 'Notifications',
      href: '/notifications',
    },
    {
      icon: FaUser,
      label: 'Profile',
      href: `/users/`,
    },
  ]

  return (
    <div className="flex flex-col w-[230px] h-screen">
      <p className="text-2xl text-[#ddd] font-[400] p-[0.5rem] mt-[0.5rem]">
        tweepy
      </p>
      <div className="mt-[1rem] flex flex-col gap-[0.2rem]">
        {menu.map((item, index) => {
          return (
            <SidebarItems
              key={index}
              label={item.label}
              href={item.href}
              icon={item.icon}
            />
          )
        })}
      </div>
    </div>
  )
}
