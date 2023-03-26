import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { TypedUseSelectorHook } from "react-redux/es/types"
import loginModal from "./features/loginModal"
import registerModal from "./features/registerModal"
import user from "./features/user"

const store = configureStore({
  reducer: {
    user,
    registerModal,
    loginModal
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
