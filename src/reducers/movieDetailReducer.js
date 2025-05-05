import {
  FETCH_MOVIE_DETAIL_FAILURE,
  FETCH_MOVIE_DETAIL_SUCCESS,
  FETCH_MOVIE_DETAIL_REQUEST,
} from "../actions/movieDetailActions";

const initialState = {
  loadingMovie: false,
  movie: [],
  error: "",
};

export const movieDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAIL_REQUEST:
      return {
        ...state,
        loadingMovie: true,
      };
    case FETCH_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        loadingMovie: false,
        movie: action.payload,
        error: "",
      };

    case FETCH_MOVIE_DETAIL_FAILURE:
      return {
        ...state,
        loadingMovie: false,
        movie: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default movieDetailReducer;
