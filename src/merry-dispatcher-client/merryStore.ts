import { createStore, combineReducers, applyMiddleware } from "redux"
import { createMerryDispatcher } from "../merry-dispatcher"
import { bearReducer } from "../core/actions/bears"

const rootReducer = combineReducers({
  bears: bearReducer
})

export const createMerryStore = (merryReturnValue: number) => {
  const merryDispatcher = createMerryDispatcher("Ciop", merryReturnValue)
  return createStore(rootReducer, applyMiddleware(merryDispatcher))
}
