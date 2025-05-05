import {
  SEARCH_MOVIES_FAILURE,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
} from "../actions/searchMovieActions";

const initialState = {
  loadingSearchResults: false,
  searchResults: [],
  error: "",
};

export const searchMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        loadingSearchResults: true,
      };
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loadingSearchResults: false,
        searchResults: action.payload,
        error: "",
      };
    case SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        loadingSearchResults: false,
        searchResults: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
