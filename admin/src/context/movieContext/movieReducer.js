import {
  GET_MOVIES_FAIL,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_START,
  DELETE_MOVIE_FAIL,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_START,
} from '../';

const movieReducer = (state, action) => {
  switch (action.type) {
    case GET_MOVIES_START:
      return { movies: [], isFetching: true, error: false };
    case GET_MOVIES_SUCCESS:
      return { movies: action.payload, isFetching: false, error: false };
    case GET_MOVIES_FAIL:
      return { movies: [], isFetching: false, error: true };
    case DELETE_MOVIE_START:
      return { ...state, isFetching: true, error: false };
    case DELETE_MOVIE_SUCCESS:
      return {
        movies: state.movies.filter((movie) => movie._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case DELETE_MOVIE_FAIL:
      return { ...state, isFetching: false, error: true };

    default:
      return { ...state };
  }
};

export default movieReducer;
