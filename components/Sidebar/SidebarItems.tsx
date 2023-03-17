import { IconType } from 'react-icons/lib'

interface SidebarItemsProps {
  label: string
  href: string
  icon: IconType
}

export default function SidebarItems({
  label,
  href,
  icon: Icon,
}: SidebarItemsProps) {
  return (
    <a
      href={href}
      className="text-[#ddd] inline-flex gap-[1rem] items-center hover:bg-slate-300 hover:bg-opacity-10 w-[fit-content] px-[1rem] py-[0.8rem] rounded-full transition-all duration-2 cursor-pointer"
    >
      <Icon size={24} />
      <p className="text-[#ddd] text-xl font-[400]">{label}</p>
    </a>
  )
}
