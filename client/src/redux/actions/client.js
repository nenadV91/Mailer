import {
  CLIENTS_GET_REQUESTED,
  CLIENTS_GET_SUCCEEDED,
  CLIENTS_GET_FAILED,
  CLIENT_ADD_REQUESTED,
  CLIENT_ADD_SUCCEEDED,
  CLIENT_ADD_FAILED,
  CLIENT_REMOVE,
  CLIENT_SELECT,
  CLIENT_UNSELECT
} from 'redux/types';
import axios from 'axios';


export const getClients = () => {
  return async dispatch => {
    dispatch({type: CLIENTS_GET_REQUESTED})

    try {
      const res = await axios.get('/client');
      dispatch({type: CLIENTS_GET_SUCCEEDED, payload: res.data})
    } catch(error) {
      dispatch({type: CLIENTS_GET_FAILED})
      throw new Error(error.response.data.message)
    }
  }
}


export const addClient = (data) => {
  return async dispatch => {
    dispatch({type: CLIENT_ADD_REQUESTED})

    try {
      const res = await axios.post('/client', data);
      dispatch({type: CLIENT_ADD_SUCCEEDED, payload: res.data})
      return res.data;
    } catch(error) {
      dispatch({type: CLIENT_ADD_FAILED});
      throw new Error(error.response.data.message)
    }
  }
}


export const removeClient = (id) => {
  return async dispatch => {
    await axios.delete(`/client/${id}`);
    dispatch({type: CLIENT_REMOVE, payload: id})
  }
}


export const selectClient = client => {
  return {type: CLIENT_SELECT, payload: client}
}


export const unselectClient = client => {
  return {type: CLIENT_UNSELECT}
}