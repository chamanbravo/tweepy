import { useAppDispatch, useAppSelector } from "@/store"
import { toggleLoginModal } from "@/store/features/loginModal"
import { toggleRegisterModal } from "@/store/features/registerModal"
import { SetStateAction, useCallback, useState } from "react"
import Input from "../Input"
import Modal from "../Modal"

export default function RegisterModal() {
  const dispatch = useAppDispatch()
  const { isOpen } = useAppSelector((state) => state.registerModal)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = () => {}
  const onToggle = useCallback(() => {
    if (isLoading) return

    dispatch(toggleRegisterModal())
    dispatch(toggleLoginModal())
  }, [isLoading, dispatch])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        disabled={isLoading}
        placeholder="Email"
        value={email}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setEmail(e.target.value)
        }
      />
      <Input
        disabled={isLoading}
        placeholder="Name"
        value={name}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setName(e.target.value)
        }
      />
      <Input
        disabled={isLoading}
        placeholder="Username"
        value={username}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setUsername(e.target.value)
        }
      />
      <Input
        disabled={isLoading}
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setPassword(e.target.value)
        }
      />
    </div>
  )

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Already have an account?
        <span
          className="text-white cursor-pointer hover:underline ml-2"
          onClick={onToggle}
        >
          Sign in
        </span>
      </p>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={isOpen}
      title="Create an account"
      actionLabel="Register"
      onClose={() => dispatch(toggleRegisterModal())}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  )
}
