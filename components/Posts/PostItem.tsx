import { useRouter } from "next/router"
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from "react-icons/ai"
import Avatar from "../Avatar"
interface PostItemProps {
  data: Record<string, any>
  userId: string
}

export default function PostItem({ data = {}, userId }: PostItemProps) {
  const {
    id,
    username,
    name,
    createdAt,
    body,
    commentsCount,
    likesCount,
    hasLiked
  } = data
  const LikeIcon = hasLiked ? AiFillHeart : AiOutlineHeart
  const router = useRouter()

  return (
    <div
      onClick={() => {}}
      className="
        border-b-[1px] 
        border-neutral-800 
        p-5 
        cursor-pointer 
        hover:bg-neutral-900 
        transition
      "
    >
      <div className="flex flex-row items-start gap-3">
        <Avatar userId={userId} />
        <div>
          <div className="flex flex-row items-center gap-2">
            <p
              onClick={() => {}}
              className="
                text-white 
                font-semibold 
                cursor-pointer 
                hover:underline
            "
            >
              {name}
            </p>
            <span
              onClick={() => {}}
              className="
                text-neutral-500
                cursor-pointer
                hover:underline
                hidden
                md:block
            "
            >
              @{username}
            </span>
            <span className="text-neutral-500 text-sm">{createdAt}</span>
          </div>
          <div className="text-white mt-1">{body}</div>
          <div className="flex flex-row items-center mt-3 gap-10">
            <div
              className="
                flex 
                flex-row 
                items-center 
                text-neutral-500 
                gap-2 
                cursor-pointer 
                transition 
                hover:text-sky-500
            "
            >
              <AiOutlineMessage size={20} />
              <p>{commentsCount || 0}</p>
            </div>
            <div
              onClick={() => {}}
              className="
                flex 
                flex-row 
                items-center 
                text-neutral-500 
                gap-2 
                cursor-pointer 
                transition 
                hover:text-red-500
            "
            >
              <LikeIcon color={hasLiked ? "red" : ""} size={20} />
              <p>{likesCount || 0}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
