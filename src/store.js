import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { moviesReducer } from "./reducers/moviesReducer";
import { searchMoviesReducer } from "./reducers/searchMoviesReducer";

const rootReducer = combineReducers({
  moviesReducer,
  searchMoviesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
