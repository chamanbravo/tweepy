import { useAppDispatch, useAppSelector } from "@/store";
import { toggleEditModal } from "@/store/features/editModal";
import { BiCalendar } from "react-icons/bi";
import Button from "../Button";

interface UserBioProps {
  username: string
}

const UserBio: React.FC<UserBioProps> = ({ username }) => {
  const dispatch = useAppDispatch()
  const fetchedUser = useAppSelector((state) => state.userProfile)
  const currentUser = useAppSelector((state) => state.user)

  const toggleFollow = () => {}
  const isFollowing = false

  return (
    <div className="border-b-[1px] border-neutral-800 pb-4">
      <div className="flex justify-end p-2">
        {currentUser?.username === username ? (
          <Button secondary label="Edit" onClick={() => dispatch(toggleEditModal()) } />
        ) : (
          <Button
            onClick={toggleFollow}
            label={isFollowing ? "Unfollow" : "Follow"}
            secondary={!isFollowing}
            outline={isFollowing}
          />
        )}
      </div>
      <div className="px-4">
        <div className="flex flex-col">
          <p className="text-white text-2xl font-semibold">
            {fetchedUser?.name}
          </p>
          <p className="text-md text-neutral-500">@{fetchedUser?.username}</p>
        </div>
        <div className="flex flex-col mt-4">
         {fetchedUser?.bio && <p className="text-white">{fetchedUser?.bio}</p>}
          <div
            className="
              flex
              flex-row
              items-center
              gap-2
              mt-2
              text-neutral-500
          "
          >
            <BiCalendar size={24} />
            <p>Joined {fetchedUser.doj}</p>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4 gap-6">
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">{fetchedUser?.following?.length || 0}</p>
            <p className="text-neutral-500">Following</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">{fetchedUser?.followersCount || 0}</p>
            <p className="text-neutral-500">Followers</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserBio
