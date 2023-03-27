import { useAppDispatch } from "@/store"
import { toggleLoginModal } from "@/store/features/loginModal"
import { toggleRegisterModal } from "@/store/features/registerModal"
import Button from "../Button"

export default function SignUp() {
  const dispatch = useAppDispatch()
  const registerModal = () => {
    dispatch(toggleRegisterModal())
  }
  const signinModal = () => {
    dispatch(toggleLoginModal())
  }

  return (
    <div className="px-2 py-4 hidden lg:block w-[320px] border-[1px] border-neutral-800 h-[fit-content] ml-[1rem] rounded-[5px] mt-[2rem]">
      <h1 className="text-[#ddd] text-xl font-bold">New to Tweepy</h1>
      <p className="text-[#ddd] text-opacity-40 text-[0.8rem]">
        Sign up now to get your own personalized timeline!
      </p>
      <Button
        label="Create Account"
        onClick={registerModal}
        fullWidth
        secondary
      />
      <Button label="Sign in" onClick={signinModal} fullWidth />
    </div>
  )
}
