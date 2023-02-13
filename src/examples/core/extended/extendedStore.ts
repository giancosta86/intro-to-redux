import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";

import { bearReducer } from "../actions/bears";
import { rangerReducer } from "../actions/rangers";

const rootReducer = combineReducers({
  bears: bearReducer,
  rangers: rangerReducer
});

const logger = createLogger({});

export const createExtendedStore = () =>
  createStore(rootReducer, applyMiddleware(logger));
