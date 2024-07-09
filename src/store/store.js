import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import reducer from "./reducers/reducers"; // Adjust the import path as needed

const rootReducer = combineReducers({
  main: reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger)); // Make sure thunk is imported and used correctly
