import { useSelector } from "react-redux";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../../constants";
import "./heroImage.scss";

const HeroImage = () => {
  const movies = useSelector((state) => state.moviesReducer.movies);

  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(28,28,28, 0.8), rgba(28, 28, 28, 0.8)), url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies[1]?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "643px",
        position: "relative",
      }}
    >
      <div className="content-container">
        <div className="content">
          <h1>{movies[1]?.original_title}</h1>
          <p>{movies[1]?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
