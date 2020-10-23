import { createStore } from "redux"
import { bearReducer } from "../actions/bears"

export const createBasicStore = () => createStore(bearReducer)
