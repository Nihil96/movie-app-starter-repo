import "./MovieDetails.scss"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { fetchMovieDetails } from "../../actions/movieDetailActions"
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../../constants"
import Spinner from "../../components/Spinner/Spinner"
import PageNotFound from "../PageNotFound/PageNotFound"
import { useEffect } from "react"
import { formatRating } from "../../helpers"
import noImage from "../../images/no-image.jpg"

const MovieDetails = () => {
  const { movie, error, loadingMovie } = useSelector(
    (state) => state.movieDetailReducer
  )

  const dispatch = useDispatch()
  const { movieId } = useParams()

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId))
  }, [dispatch, movieId])

  if (error) {
    return <PageNotFound />
  }

  if (loadingMovie) {
    return <Spinner />
  }

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px 20px",
      }}
    >
      <div className="movie-details-container">
        <img
          className="movie-img"
          src={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : noImage
          }
          alt="movie-img"
        />
        <div className="movie-details-content">
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating">
            <div>
              <h3>RATING</h3>
              <div className="score">{formatRating(movie.vote_average)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
