import axios from "axios";

export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

export const apiBaseUrl = import.meta.env.VITE_APP_API;
export const apiKey = import.meta.env.VITE_APP_API_KEY;

export const fetchMoviesRequest = () => ({ type: FETCH_MOVIES_REQUEST });

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});

export const fetchMovies = (page) => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest());

    axios
      .get(`${apiBaseUrl}/movie/popular?api_key=${apiKey}&page=${page}`)
      .then((res) => {
        const movies = res.data.results;
        dispatch(fetchMoviesSuccess(movies));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchMoviesFailure(errMsg));
      });
  };
};
