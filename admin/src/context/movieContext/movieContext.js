import movieReducer from './movieReducer';
import { createContext, useReducer } from 'react';

const initialState = {
  movies: [],
  isFetching: false,
  error: false,
};

export const MovieContext = createContext(initialState);

export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <MovieContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
