import listsReducer from './listsReducer';
import { createContext, useReducer } from 'react';

const initialState = {
  lists: [],
  isFetching: false,
  error: false,
};

export const ListsContext = createContext(initialState);

export const ListsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(listsReducer, initialState);

  return (
    <ListsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ListsContext.Provider>
  );
};
