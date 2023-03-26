import { useAppDispatch, useAppSelector } from "@/store"
import { toggleLoginModal } from "@/store/features/loginModal"
import { toggleRegisterModal } from "@/store/features/registerModal"
import { signIn } from "next-auth/react"
import { useCallback, useState } from "react"
import toast from "react-hot-toast"
import Modal from "."
import Input from "../Input"

export default function LoginModal() {
  const dispatch = useAppDispatch()
  const { isOpen } = useAppSelector((state) => state.loginModal)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true)
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false
      })
      if (res.ok) {
        toast.success("Logged in")
        dispatch(toggleLoginModal())
      } else {
        toast.error("Invalid credentials")
      }
    } catch (error) {
      toast.error("Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }, [email, password, dispatch])

  const onToggle = useCallback(() => {
    if (isLoading) return

    dispatch(toggleLoginModal())
    dispatch(toggleRegisterModal())
  }, [dispatch, isLoading])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  )

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        First time using Twitter?
        <span
          onClick={onToggle}
          className="text-white cursor-pointer hover:underline ml-2"
        >
          Create an account
        </span>
      </p>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={isOpen}
      title="Login"
      actionLabel="Sign in"
      onClose={() => dispatch(toggleLoginModal())}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  )
}
