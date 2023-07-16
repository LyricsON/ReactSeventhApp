import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "./actionTypes";

export const addMovie = (newMovie) => ({
  type: ADD_MOVIE,
  payload: newMovie,
});

export const deleteMovie = (movieId) => ({
  type: DELETE_MOVIE,
  payload: movieId,
});

export const editMovie = (editedMovie) => ({
  type: EDIT_MOVIE,
  payload: editedMovie,
});
