import axios from "axios";

export const SEARCH_MOVIES_REQUEST = "SEARCH_MOVIES_REQUEST";
export const SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS";
export const SEARCH_MOVIES_FAILURE = "SEARCH_MOVIES_FAILURE";

export const apiBaseUrl = import.meta.env.VITE_APP_API;
export const apiKey = import.meta.env.VITE_APP_API_KEY;

export const searchMoviesRequest = () => ({ type: SEARCH_MOVIES_REQUEST });

export const searchMoviesSuccess = (movie) => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload: movie,
});

export const searchMoviesFailure = (error) => ({
  type: SEARCH_MOVIES_FAILURE,
  payload: error,
});

export const searchMovieDetails = (searchedTerm) => {
  return (dispatch) => {
    dispatch(searchMoviesRequest());
    axios
      .get(`${apiBaseUrl}/search/movie?api_key=${apiKey}&query=${searchedTerm}`)
      .then((res) => {
        const movie = res.data.results;
        dispatch(searchMoviesSuccess(movie));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(searchMoviesFailure(errorMsg));
      });
  };
};
