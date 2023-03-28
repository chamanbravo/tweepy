import { useAppSelector } from "@/store"
import { useCallback, useState } from "react"
import Avatar from "../Avatar"
import Button from "../Button"

interface FormProps {
  placeholder: string
  isComment?: boolean
  postId?: string
}

const Form: React.FC<FormProps> = ({ placeholder, isComment, postId }) => {
  const [body, setBody] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { username } = useAppSelector((state) => state.user)

  const onSubmit = useCallback(async () => {}, [])

  return (
    <div className="border-b-[1px] border-neutral-800 px-5 py-2">
      <div className="flex flex-row gap-4">
        <div className="mt-2">
          <Avatar username={username} />
        </div>
        <div className="w-full">
          <textarea
            disabled={isLoading}
            onChange={(event) => setBody(event.target.value)}
            value={body}
            className="
                disabled:opacity-80
                peer
                resize-none
                mt-3
                w-full
                bg-black
                ring-0
                outline-none
                text-[20px]
                placeholder-neutral-500
                text-white
              "
            placeholder={placeholder}
          ></textarea>
          <hr
            className="
                opacity-100
                h-[1px]
                w-full
                border-neutral-800
                transition"
          />
          <div className="mt-4 flex flex-row justify-end">
            <Button
              disabled={isLoading || !body}
              onClick={onSubmit}
              label="Tweet"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
