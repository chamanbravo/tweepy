import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchUserProfile = createAsyncThunk(
  "userProfile/fetchUserProfile",
  async (username: string) => {
    const response = await fetch(`/api/users/${username}`)
    const data = await response.json()
    return data
  }
)

type UserProfileState = {
  name: string
  username: string
  email: string
  image: string
  coverImage: string
  bio: string
  location: string
  website: string
  doj: string
  followersCount: number
  followingCount: number
  tweetsCount: number
}

const initialState: UserProfileState = {
  name: "",
  username: "",
  email: "",
  image: "",
  coverImage: "",
  bio: "",
  location: "",
  website: "",
  doj: "",
  followersCount: 0,
  followingCount: 0,
  tweetsCount: 0
}

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.name = action.payload.name
      state.username = action.payload.username
      state.email = action.payload.email
      state.image = action.payload.image
      state.coverImage = action.payload.coverImage
      state.bio = action.payload.bio
      state.location = action.payload.location
      state.website = action.payload.website
      state.doj = action.payload.doj
      state.followersCount = action.payload.followersCount
      state.followingCount = action.payload.followingCount
      state.tweetsCount = action.payload.tweetsCount
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.name = action.payload?.name
      state.username = action.payload?.username
      state.email = action.payload?.email
      state.image = action.payload?.image
      state.coverImage = action.payload?.coverImage
      state.bio = action.payload?.bio
      state.location = action.payload?.location
      state.website = action.payload?.website
      state.doj = action.payload?.doj
      state.followersCount = action.payload?.followersCount
      state.followingCount = action.payload?.followingCount
      state.tweetsCount = action.payload?.tweetsCount
    })
  }
})

export const { setUserProfile } = userProfileSlice.actions
export default userProfileSlice.reducer
