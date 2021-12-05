import {
  GET_LISTS_FAIL,
  GET_LISTS_START,
  GET_LISTS_SUCCESS,
  DELETE_LIST_START,
  DELETE_LIST_FAIL,
  DELETE_LIST_SUCCESS,
  CREATE_LIST_FAIL,
  CREATE_LIST_SUCCESS,
  CREATE_LIST_START,
  UPDATE_LIST_SUCCESS,
  UPDATE_LIST_FAIL,
  UPDATE_LIST_START,
} from '..';

const listsReducer = (state, action) => {
  switch (action.type) {
    case GET_LISTS_START:
      return { lists: [], isFetching: true, error: false };
    case GET_LISTS_SUCCESS:
      return { lists: action.payload, isFetching: false, error: false };
    case GET_LISTS_FAIL:
      return { lists: [], isFetching: false, error: true };
    case DELETE_LIST_START:
      return { ...state, isFetching: true, error: false };
    case DELETE_LIST_SUCCESS:
      return {
        lists: state.lists.filter((list) => list._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case DELETE_LIST_FAIL:
      return { ...state, isFetching: false, error: true };
    case CREATE_LIST_START:
      return { ...state, isFetching: true, error: false };
    case CREATE_LIST_SUCCESS:
      return {
        lists: [...state.lists, action.payload],
        isFetching: false,
        error: false,
      };
    case CREATE_LIST_FAIL:
      return { ...state, isFetching: false, error: true };
    case UPDATE_LIST_START:
      return { ...state, isFetching: true, error: false };
    case UPDATE_LIST_SUCCESS:
      return {
        lists: state.lists.map(
          (list) => list._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case UPDATE_LIST_FAIL:
      return { ...state, isFetching: false, error: true };

    default:
      return { ...state };
  }
};

export default listsReducer;
