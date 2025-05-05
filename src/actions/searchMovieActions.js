import axios from "axios"

export const SEARCH_MOVIE_REQUEST = "SEARCH_MOVIE_REQUEST"
export const SEARCH_MOVIE_SUCCESS = "SEARCH_MOVIE_SUCCESS"
export const SEARCH_MOVIE_FAILURE = "SEARCH_MOVIE_FAILURE"

const apiBaseUrl = import.meta.env.VITE_APP_API
const apiKey = import.meta.env.VITE_APP_API_KEY

export const searchMovieRequest = () => ({ type: SEARCH_MOVIE_REQUEST })

export const searchMovieSuccess = (movie) => ({
  type: SEARCH_MOVIE_SUCCESS,
  payload: movie,
})

export const searchMovieFailure = (error) => ({
  type: SEARCH_MOVIE_FAILURE,
  payload: error,
})

export const searchMovieDetails = (searchedTerm) => {
  return (dispatch) => {
    dispatch(searchMovieRequest())
    axios
      .get(`${apiBaseUrl}/search/movie?api_key=${apiKey}&query=${searchedTerm}`)
      .then((res) => {
        const movie = res.data.results
        dispatch(searchMovieSuccess(movie))
      })
      .catch((error) => {
        const errorMsg = error.message
        dispatch(searchMovieFailure(errorMsg))
      })
  }
}
