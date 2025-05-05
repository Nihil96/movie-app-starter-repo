import "./MovieCard.scss"
import { Link } from "react-router-dom"

import PropTypes from "prop-types"

const MovieCard = ({ image, movieId, title, releaseDate }) => {
  return (
    <div>
      <Link to={`${movieId}`}>
        <img className="movie-img" src={image} alt="movie-img" />
      </Link>
      <h3>{title}</h3>
      <h5>{releaseDate}</h5>
    </div>
  )
}

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
}

export default MovieCard
