import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ filteredMovies }) => {
  return (
    <div className="movie-list">
      {React.Children.toArray(
        filteredMovies.map((el) => <MovieCard movie={el} />)
      )}
    </div>
  );
};

export default MovieList;
