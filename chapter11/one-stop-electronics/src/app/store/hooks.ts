import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { useIntl } from "react-intl"
import { useNavigate } from "react-router-dom"
import type { RootState, AppDispatch } from "./store"

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useNavigator = useNavigate
export const useAppIntl = useIntl
