import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import MovieList from "./pages/movieList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
      </Routes>
    </>
  );
}

export default App;
