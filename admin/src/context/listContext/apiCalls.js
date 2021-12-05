import {
  getListsStart,
  getListsFail,
  getListsSuccess,
  deleteListFail,
  deleteListStart,
  deleteListSuccess,
  createListFail,
  createListStart,
  createListSuccess,
} from './listsActions';
import axios from 'axios';

// get all lists
export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get('/lists', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFail());
  }
};
// delete list by id
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete(`/lists/${id}`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFail());
  }
};
// create movie
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post('/lists', list, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFail());
  }
};
