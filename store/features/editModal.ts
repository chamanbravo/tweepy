import { createSlice } from "@reduxjs/toolkit"

type ModalState = {
  isOpen: boolean
}

const initialState: ModalState = {
  isOpen: false
}

export const editModalSlice = createSlice({
  name: "editModal",
  initialState,
  reducers: {
    toggleEditModal: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})

export const { toggleEditModal } = editModalSlice.actions
export default editModalSlice.reducer
