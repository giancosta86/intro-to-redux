import { configureStore } from "@reduxjs/toolkit"
import { bearReducer } from "./slices/bears"
import { rangerReducer } from "./slices/rangers"
import { logger } from "redux-logger"

export const createToolkitStore = () =>
  configureStore({
    reducer: {
      bears: bearReducer,
      rangers: rangerReducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger]
  })
