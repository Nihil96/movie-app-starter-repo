import { Link } from "react-router-dom"
import "./Navbar.scss"
import MovieLogo from "../../images/movie-logo.svg?react"
import TmdbLogo from "../../images/tmdb-logo.svg?react"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="react-movie-logo">
          <Link to="/">
            <MovieLogo />
          </Link>
        </li>
        <li className="tmdb-logo">
          <TmdbLogo />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
