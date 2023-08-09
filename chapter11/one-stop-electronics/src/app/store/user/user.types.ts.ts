export type UserInfo = {
  displayName: string
  createdAt: Date
  email: string
}

export type UserState = {
  currentUser: UserInfo | null,
  locale: string
}
