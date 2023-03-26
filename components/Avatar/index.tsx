import Image from "next/image"
import { useRouter } from "next/router"
import { useCallback } from "react"
import PlaceholderImg from "../../images/placeholder.webp"

interface AvatarProps {
  username: string
  isLarge?: boolean
  hasBorder?: boolean
}

export default function Avatar({ username, isLarge, hasBorder }: AvatarProps) {
  const router = useRouter()

  const onClick = useCallback(
    (event: any) => {
      event.stopPropagation()
      const url = `/${username}`
      router.push(url)
    },
    [router, username]
  )

  return (
    <div
      className={`
        ${hasBorder ? "border-4 border-black" : ""}
        ${isLarge ? "h-30" : "h-10"}
        ${isLarge ? "w-30" : "w-10"}
        rounded-full
        hover:opacity-90
        transition
        cursor-pointer
        relative
      `}
    >
      <Image
        fill
        style={{
          objectFit: "cover",
          borderRadius: "100%"
        }}
        alt="Avatar"
        onClick={onClick}
        src={PlaceholderImg}
      />
    </div>
  )
}
