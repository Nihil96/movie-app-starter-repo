import { Link } from "react-router-dom"
import "./PageNotFound.scss"

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="home-button">
        Go Back Home
      </Link>
    </div>
  )
}

export default PageNotFound
