import {
  createMovieFail,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFail,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFail,
  getMoviesStart,
  getMoviesSuccess,
  updateMovieFail,
  updateMovieStart,
  updateMovieSuccess,
} from './movieActions';
import axios from 'axios';

// get all movies
export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get('movies', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFail());
  }
};
// create movie
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post('/movies', movie, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFail());
  }
};
// update movie
export const updateMovie = async (movie, dispatch) => {
  dispatch(updateMovieStart());
  try {
    const res = await axios.put(`/movies/${movie._id}`, movie, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    dispatch(updateMovieSuccess(res.data));
  } catch (err) {
    dispatch(updateMovieFail());
  }
};

// delete movie by id
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete(`movies/${id}`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFail());
  }
};
