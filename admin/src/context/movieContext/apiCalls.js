import {
  deleteMovieFail,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFail,
  getMoviesStart,
  getMoviesSuccess,
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
