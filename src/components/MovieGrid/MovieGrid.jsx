import { IMAGE_BASE_URL, POSTER_SIZE } from "../../constants"
import noImage from "../../images/no-image.jpg"
import noResults from "../../images/no-results.png"
import MovieCard from "../MovieCard/MovieCard"
import { useSelector } from "react-redux"
import "./MovieGrid.scss"
import PropTypes from "prop-types"

const MovieGrid = ({ searchMovie }) => {
  const movies = useSelector((state) => state.moviesReducer.movies)
  const searchResults = useSelector(
    (state) => state.searchMoviesReducer.searchResults
  )

  return (
    <div className="movies-container">
      {searchMovie ? (
        <>
          <h1>Search results</h1>
          <div className="movies">
            {searchResults?.length === 0 ? (
              <div className="no-results">
                <img
                  src={noResults}
                  alt="No Results"
                  className="no-results-image"
                />
                <h2 className="no-results-title">No Results Found</h2>
                <p className="no-results-message">
                  We couldn't find what you're looking for. Try searching again.
                </p>
              </div>
            ) : (
              searchResults?.map((movie) => (
                <MovieCard
                  key={movie.id}
                  image={
                    movie.poster_path
                      ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                      : noImage
                  }
                  movieId={movie.id}
                  title={movie.original_title}
                  releaseDate={movie.release_date}
                />
              ))
            )}
          </div>
        </>
      ) : (
        <>
          <h1>Most popular movies</h1>
          <div className="movies">
            {movies?.map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  image={
                    movie.poster_path
                      ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                      : noImage
                  }
                  movieId={movie.id}
                  title={movie.original_title}
                  releaseDate={movie.release_date}
                />
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

MovieGrid.propTypes = {
  searchMovie: PropTypes.string.isRequired,
}

export default MovieGrid
