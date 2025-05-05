import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../actions/movieActions";
import { PAGE_ONE } from "../constants";
import HeroImage from "../components/heroImage/heroImage";

const MovieList = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const loadingMovies = useSelector(
    (state) => state.moviesReducer.loadingMovies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies(PAGE_ONE));
  }, [dispatch]);

  return (
    <>
      <HeroImage />
    </>
  );
};

export default MovieList;
