import { createSlice } from "@reduxjs/toolkit"
import { UserState } from "./user.types.ts"

const INITIAL_STATE: UserState = {
  currentUser: null,
  locale: 'en-US'
}

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload
    },
    setCurrentLocale(state, action) {
      state.locale = action.payload
    }
  },
})

export const { setCurrentUser, setCurrentLocale } = userSlice.actions

export const userReducer = userSlice.reducer
