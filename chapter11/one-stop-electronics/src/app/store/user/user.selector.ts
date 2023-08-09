import { createSelector } from "reselect"
import { RootState } from "@/app/store/store.js"
import { UserState } from "./user.types.ts"

export const selectUserReducer = (state: RootState): UserState => state.user

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (userSlice) => userSlice.currentUser,
)

export const selectCurrentLocale = createSelector(
  selectUserReducer,
  (userSlice) => userSlice.locale,
)