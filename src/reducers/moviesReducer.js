import {
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
} from "../actions/movieActions";

const initialState = {
  loadingMovies: false,
  movies: [],
  error: "",
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loadingMovies: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loadingMovies: false,
        movies: action.payload,
        error: "",
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loadingMovies: false,
        movies: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
