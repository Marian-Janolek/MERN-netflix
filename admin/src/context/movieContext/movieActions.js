import {
  GET_MOVIES_FAIL,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_START,
  DELETE_MOVIE_FAIL,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_START,
  CREATE_MOVIE_FAIL,
  CREATE_MOVIE_START,
  CREATE_MOVIE_SUCCESS,
  UPDATE_MOVIE_SUCCESS,
  UPDATE_MOVIE_START,
  UPDATE_MOVIE_FAIL,
} from '../';

// get movies
export const getMoviesStart = () => ({
  type: GET_MOVIES_START,
});
export const getMoviesSuccess = (movies) => ({
  type: GET_MOVIES_SUCCESS,
  payload: movies,
});
export const getMoviesFail = () => ({
  type: GET_MOVIES_FAIL,
});
// delete movies
export const deleteMovieStart = () => ({
  type: DELETE_MOVIE_START,
});
export const deleteMovieSuccess = (id) => ({
  type: DELETE_MOVIE_SUCCESS,
  payload: id,
});
export const deleteMovieFail = () => ({
  type: DELETE_MOVIE_FAIL,
});
// create movie
export const createMovieStart = () => ({
  type: CREATE_MOVIE_START,
});
export const createMovieSuccess = (movie) => ({
  type: CREATE_MOVIE_SUCCESS,
  payload: movie,
});
export const createMovieFail = () => ({
  type: CREATE_MOVIE_FAIL,
});
// update movie
export const updateMovieStart = () => ({
  type: UPDATE_MOVIE_START,
});
export const updateMovieSuccess = (movie) => ({
  type: UPDATE_MOVIE_SUCCESS,
  payload: movie,
});
export const updateMovieFail = () => ({
  type: UPDATE_MOVIE_FAIL,
});
