import {
  GET_LISTS_FAIL,
  GET_LISTS_SUCCESS,
  GET_LISTS_START,
  DELETE_LIST_FAIL,
  DELETE_LIST_SUCCESS,
  DELETE_LIST_START,
  CREATE_LIST_FAIL,
  CREATE_LIST_SUCCESS,
  CREATE_LIST_START,
  UPDATE_LIST_FAIL,
  UPDATE_LIST_SUCCESS,
  UPDATE_LIST_START,
} from '../';

// get movies
export const getListsStart = () => ({
  type: GET_LISTS_START,
});
export const getListsSuccess = (lists) => ({
  type: GET_LISTS_SUCCESS,
  payload: lists,
});
export const getListsFail = () => ({
  type: GET_LISTS_FAIL,
});
// delete movies
export const deleteListStart = () => ({
  type: DELETE_LIST_START,
});
export const deleteListSuccess = (id) => ({
  type: DELETE_LIST_SUCCESS,
  payload: id,
});
export const deleteListFail = () => ({
  type: DELETE_LIST_FAIL,
});
// create movie
export const createListStart = () => ({
  type: CREATE_LIST_START,
});
export const createListSuccess = (list) => ({
  type: CREATE_LIST_SUCCESS,
  payload: list,
});
export const createListFail = () => ({
  type: CREATE_LIST_FAIL,
});
// update movie
export const updateListStart = () => ({
  type: UPDATE_LIST_START,
});
export const updateListSuccess = (list) => ({
  type: UPDATE_LIST_SUCCESS,
  payload: list,
});
export const updateListFail = () => ({
  type: UPDATE_LIST_FAIL,
});
