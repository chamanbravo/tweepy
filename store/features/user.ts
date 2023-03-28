import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const currentUser = createAsyncThunk("user/currentUser", async () => {
  const response = await fetch("/api/currentUser")
  const data = await response.json()
  return data
})

type UserState = {
  name: string
  username: string
  email: string
  image: string
  coverImage: string
  bio: string
}

const initialState: UserState = {
  name: "",
  username: "",
  email: "",
  image: "",
  coverImage: "",
  bio: ""
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name
      state.username = action.payload.username
      state.email = action.payload.email
      state.image = action.payload.image
      state.coverImage = action.payload.coverImage
      state.bio = action.payload.bio
    }
  },
  extraReducers: (builder) => {
    builder.addCase(currentUser.fulfilled, (state, action) => {
      state.name = action.payload.name
      state.username = action.payload.username
      state.email = action.payload.email
      state.image = action.payload.image
      state.coverImage = action.payload.coverImage
      state.bio = action.payload.bio
    })
  }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
