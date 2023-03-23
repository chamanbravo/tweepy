import { useAppDispatch, useAppSelector } from "@/store"
import { toggleLoginModal } from "@/store/features/loginModal"
import { toggleRegisterModal } from "@/store/features/registerModal"
import axios from "axios"
import { signIn } from "next-auth/react"
import { useCallback, useState } from "react"
import toast from "react-hot-toast"
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

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post("/api/register", {
        email,
        password,
        username,
        name
      })
      if (data.success) {
        setIsLoading(false)
        toast.success("Account created successfully!")
        dispatch(toggleRegisterModal())
        signIn("credentials", {
          email,
          password
        })
      } else {
        toast.error(data.error)
      }
    } catch (e: any) {
      toast.error(e.response.data.error)
    } finally {
      setIsLoading(false)
    }
  }, [email, password, username, name, dispatch])

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
        onChange={(e: { target: { value: string } }) =>
          setEmail(e.target.value)
        }
      />
      <Input
        disabled={isLoading}
        placeholder="Name"
        value={name}
        onChange={(e: { target: { value: string } }) => setName(e.target.value)}
      />
      <Input
        disabled={isLoading}
        placeholder="Username"
        value={username}
        onChange={(e: { target: { value: string } }) =>
          setUsername(e.target.value)
        }
      />
      <Input
        disabled={isLoading}
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e: { target: { value: string } }) =>
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
