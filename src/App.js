import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Filter from "./Components/Filter";
import MovieList from "./Components/MovieList";
import AddNewMovie from "./Components/AddMovie";
import MovieDescription from "./Components/MovieDescription";
import { useSelector } from "react-redux";

function App() {
  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(1);
  const handleTitleFilter = (x) => setTitleFilter(x);
  const handleRateFilter = (y) => setRateFilter(y);
  const movies = useSelector((state) => state.movies);
  return (
    <div className="App">
      <Router>
        <h1>My Movie App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter
                  titleFilter={titleFilter}
                  rateFilter={rateFilter}
                  handleTitleFilter={handleTitleFilter}
                  handleRateFilter={handleRateFilter}
                />
                <MovieList
                  filteredMovies={movies.filter(
                    (el) =>
                      el.name
                        .toLowerCase()
                        .includes(titleFilter.toLowerCase()) &&
                      el.rating >= rateFilter
                  )}
                />
                <AddNewMovie />
              </>
            }
          />
          <Route path="/movies/:id" element={<MovieDescription />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
