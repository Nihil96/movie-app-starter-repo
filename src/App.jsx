import { Route, Routes } from "react-router-dom"
import MovieList from "./pages/movieList/movieList"
import Navbar from "./components/navbar/navbar"
import MovieDetails from "./pages/movieDetails/movieDetails"
import PageNotFound from "./pages/PageNotFound/PageNotFound"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
