import { createSlice } from "@reduxjs/toolkit"

type ModalState = {
  isOpen: boolean
}

const initialState: ModalState = {
  isOpen: false
}

export const loginModalSlice = createSlice({
  name: "loginModal",
  initialState,
  reducers: {
    toggleLoginModal: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})

export const { toggleLoginModal } = loginModalSlice.actions
export default loginModalSlice.reducer
