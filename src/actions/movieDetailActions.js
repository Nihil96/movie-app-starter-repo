import axios from "axios";

export const FETCH_MOVIE_DETAIL_REQUEST = "FETCH_MOVIE_DETAIL_REQUEST";
export const FETCH_MOVIE_DETAIL_SUCCESS = "FETCH_MOVIE_DETAIL_SUCCESS";
export const FETCH_MOVIE_DETAIL_FAILURE = "FETCH_MOVIE_DETAIL_FAILURE";

const apiBaseUrl = import.meta.env.VITE_APP_API;
const apiKey = import.meta.env.VITE_APP_API_KEY;

export const fetchMovieDetailRequest = () => ({
  type: FETCH_MOVIE_DETAIL_REQUEST,
});

export const fetchMovieDetailSuccess = (movie) => ({
  type: FETCH_MOVIE_DETAIL_SUCCESS,
  payload: movie,
});

export const fetchMovieDetailFailure = (error) => ({
  type: FETCH_MOVIE_DETAIL_FAILURE,
  payload: error,
});

export const fetchMovieDetails = (movieId) => {
  return (dispatch) => {
    dispatch(fetchMovieDetailRequest());
    axios
      .get(`${apiBaseUrl}/movie/${movieId}?api_key=${apiKey}`)
      .then((res) => {
        const movie = res.data;
        dispatch(fetchMovieDetailSuccess(movie));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchMovieDetailFailure(errorMsg));
      });
  };
};
