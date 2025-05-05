import { createStore, applyMiddleware, combineReducers } from "redux"
import { thunk } from "redux-thunk"
import moviesReducer from "./reducers/moviesReducer"
import searchMoviesReducer from "./reducers/searchMoviesReducer"
import movieDetailReducer from "./reducers/movieDetailReducer"

const rootReducer = combineReducers({
  moviesReducer,
  searchMoviesReducer,
  movieDetailReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
