import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/ControllerSlice'

export const store = configureStore({
  reducer: {
    cotroller: counterReducer,
  },
})