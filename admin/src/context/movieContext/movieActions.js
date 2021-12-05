import {
  GET_MOVIES_FAIL,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_START,
  DELETE_MOVIE_FAIL,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_START,
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
