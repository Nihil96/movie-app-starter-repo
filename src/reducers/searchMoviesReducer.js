import {
  SEARCH_MOVIE_FAILURE,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_REQUEST,
} from "../actions/searchMovieActions"

const initialState = {
  loadingSearchResults: false,
  searchResults: [],
  error: "",
}

export const searchMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE_REQUEST:
      return {
        ...state,
        loadingSearchResults: true,
      }
    case SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        loadingSearchResults: false,
        searchResults: action.payload,
        error: "",
      }

    case SEARCH_MOVIE_FAILURE:
      return {
        ...state,
        loadingSearchResults: false,
        searchResults: [],
        error: action.payload,
      }

    default:
      return state
  }
}

export default searchMoviesReducer
