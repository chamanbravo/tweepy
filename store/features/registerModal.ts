import { createSlice } from "@reduxjs/toolkit"

type ModalState = {
  isOpen: Boolean
}

const initialState: ModalState = {
  isOpen: false
}

export const registerModalSlice = createSlice({
  name: "registerModal",
  initialState,
  reducers: {
    toggleRegisterModal: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})

export const { toggleRegisterModal } = registerModalSlice.actions
export default registerModalSlice.reducer
