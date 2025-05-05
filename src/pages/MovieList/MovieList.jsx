import { useEffect, useState } from "react"
import "./MovieList.scss"
import ReactPaginate from "react-paginate"
import SearchBar from "../../components/SearchBar/SearchBar"
import Spinner from "../../components/Spinner/Spinner"
import MovieGrid from "../../components/MovieGrid/MovieGrid"
import { useDispatch, useSelector } from "react-redux"
import { fetchMovies } from "../../actions/movieActions"
import { PAGE_ONE } from "../../constants"
import { searchMovieDetails } from "../../actions/searchMovieActions"
import HeroImage from "../../components/HeroImage/HeroImage"

const MovieList = () => {
  const [searchMovie, setSearchMovie] = useState("")
  const loadingMovies = useSelector(
    (state) => state.moviesReducer.loadingMovies
  )
  const dispatch = useDispatch()

  useEffect(() => {
    //Fetching data for the initial movie list
    dispatch(fetchMovies(PAGE_ONE))
  }, [dispatch])

  useEffect(() => {
    if (searchMovie) {
      dispatch(searchMovieDetails(searchMovie))
    }
  }, [searchMovie, dispatch])

  const handlePageClick = (data) => {
    let currentPage = data.selected + 1
    dispatch(fetchMovies(currentPage))
  }

  const onSearchChange = (newSearchTerm) => {
    setSearchMovie(newSearchTerm)
  }

  return (
    <>
      <HeroImage />
      <SearchBar onSearchChange={onSearchChange} />
      {loadingMovies ? <Spinner /> : <MovieGrid searchMovie={searchMovie} />}
      {searchMovie ? null : (
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={10}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="pagination-container"
          pageClassName="page-item"
          activeClassName="active"
          previousLinkClassName="page-item"
          nextLinkClassName="page-item"
        />
      )}
    </>
  )
}

export default MovieList
