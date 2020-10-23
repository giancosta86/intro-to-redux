import { configureStore } from "@reduxjs/toolkit"
import { asyncReducer } from "./asyncActions"
import { logger } from "redux-logger"

export const createAsyncStore = () =>
  configureStore({
    reducer: asyncReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger]
  })
