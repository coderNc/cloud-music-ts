import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector,
  useDispatch,
  TypedUseSelectorHook,
  shallowEqual
} from 'react-redux'

import counterReducer from './modules/counter'
import userReducer from './modules/user'
import recommendReducer from './modules/recommend'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    recommend: recommendReducer
  }
})

// const state = store.getState()
// type StateType = typeof state

type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

// useAppSelector的hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual

export default store
