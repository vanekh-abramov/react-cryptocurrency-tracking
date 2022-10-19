import { combineReducers, configureStore } from '@reduxjs/toolkit'
import CoincapSlice from './coinCap/coincap.slice';

const rootReducer = combineReducers({
  coins: CoincapSlice
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']