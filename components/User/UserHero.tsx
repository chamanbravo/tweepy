import { useAppSelector } from "@/store"
import Image from "next/image"
import Avatar from "../Avatar"

interface UserHeroProps {
  username: string
}

const UserHero: React.FC<UserHeroProps> = ({ username }) => {
  const fetchedUser = useAppSelector((state) => state.userProfile)

  return (
    <div>
      <div className="bg-neutral-700 h-44 relative">
        {fetchedUser?.coverImage && (
          <Image
            src={fetchedUser.coverImage}
            fill
            alt="Cover Image"
            style={{ objectFit: "cover" }}
          />
        )}
        <div className="absolute -bottom-16 left-4">
          <Avatar username={username} isLarge hasBorder image={fetchedUser?.image} />
        </div>
      </div>
    </div>
  )
}

export default UserHero
